import { Backlog } from "../../ui/Backlog/Backlog"
import { actualizarTarea, crearTarea, eliminarTareaByID, getALLTareas } from "../../../data/taskController"
import { ITask } from "../../../types/ITask"
import styles from "./Administration.module.css"
import { Header } from "../../ui/Header/Header"


export const Administration = () => {
  const tarea:ITask={
    id:"43",
    titulo:"Tarea actualizada",
    descripcion:"Una nueva tareas hecha para testeo",
    estado:"activo",
    fechaLimite:"23-4-24"
  }
  return (
    <div className={styles.mainAdminContainer}>
        <div>
            <Header/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.contentContainer_sprintList}>Sprint list</div>
            <div className={styles.contentContainer}>
                <div>
                    <Backlog />
                </div>
            </div>
        </div>
        </div>
      )
    }
