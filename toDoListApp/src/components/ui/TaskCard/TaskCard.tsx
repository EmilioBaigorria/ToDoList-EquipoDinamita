import { FC, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { addTaskToSprint, getALLSprints } from "../../../data/sprintController"
import { eliminarTareaByID } from "../../../data/taskController"
import { useTaskStore } from "../../../store/tareaStore"
import { ISprint } from "../../../types/ISprint"
import { ITask } from "../../../types/ITask"
import { Button } from "../Button/Button"
import styles from "./TaskCard.module.css"

interface ITaskCard {
  data: ITask
  setEditTareaModal: Function
  setVerTareaModal: Function
}

export const TaskCard: FC<ITaskCard> = ({ data, setEditTareaModal, setVerTareaModal }) => {
  const [sprints, setSprints] = useState<ISprint[]>([])
  const [selectedSprint, setSelectedSprint] = useState<string>("")

  const setTaskActiva = useTaskStore(state => state.setTareaActiva)

  const getSprints = async () => {
    const sprintsList = await getALLSprints()
    if (sprintsList) {
      setSprints(sprintsList)
    }
  }

  useEffect(() => {
    getSprints()
  }, [])

  const handleSprintChange = async (sprintId: string) => {
    setSelectedSprint(sprintId)
    if (sprintId) {
      await addTaskToSprint(data, sprintId)
    }
  }
  const handleDelete = () => {
    Swal.fire({
      title: "¿Seguro?",
      text: "Esta accion no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarTareaByID(data.id)
        Swal.fire({
          title: "¡Eliminado exitosamente!",
          text: "La tarea fue eliminado exitosamente",
          icon: "success",
        });
      }
    });
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftDataContainer}>
        <p>
          Titulo: {data.titulo}
        </p>
        <p>
          Descripcion: {data.descripcion}
        </p>
      </div>
      <div className={styles.rightDataContainer}>
        <select
          value={selectedSprint}
          onChange={(e) => handleSprintChange(e.target.value)}
          className={styles.sprintSelector}
        >
          <option value="">Seleccionar Sprint</option>
          {sprints.map((sprint) => (
            <option key={sprint.id} value={sprint.id}>
              {sprint.nombre}
            </option>
          ))}
        </select>
        <Button action={() => { setVerTareaModal(true) }} icon={<span className="material-symbols-outlined">visibility</span>} />
        <Button action={() => { setTaskActiva(data), setEditTareaModal(true)  }} icon={<span className="material-symbols-outlined">edit</span>} />
        <Button action={handleDelete} icon={<span className="material-symbols-outlined">delete</span>} />
      </div>
    </div>
  )
}
