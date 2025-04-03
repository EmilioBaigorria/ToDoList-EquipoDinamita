import { Backlog } from "../../ui/Backlog/Backlog"
import { actualizarTarea, crearTarea, eliminarTareaByID, getALLTareas } from "../../../data/taskController"
import { ITask } from "../../../types/ITask"


export const Administration = () => {
  const tarea:ITask={
    id:"43",
    titulo:"Tarea actualizada",
    descripcion:"Una nueva tareas hecha para testeo",
    estado:"activo",
    fechaLimite:"23-4-24"
  }
  const test=async()=>{
    //const response=await getALLTareas()

    //const response =await crearTarea(tarea)
    //const response=await eliminarTareaByID(tarea.id)
    const response=await actualizarTarea(tarea)

    console.log(response)
  }
  return (
    <div className={styles.mainAdminContainer}>
        <div>
          <button onClick={test}>TEST</button>
        </div>
        <div>
            <Header/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.contentContainer_sprintList}>Sprint list</div>
            <div>
                <Header />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentContainer_sprintList}>Sprint list</div>
                <div>
                    <Backlog />
                </div>
            </div>
        </div>
    )
}
