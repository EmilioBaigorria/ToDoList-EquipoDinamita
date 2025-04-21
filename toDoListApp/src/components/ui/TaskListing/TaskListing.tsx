import { useEffect, useState } from "react"
import { activeSprintStore } from "../../../store/activeSprintStore"
import styles from "./TaskListing.module.css"
import { TaskListColum } from "../TaskListColum/TaskListColum"
import { ISprint } from "../../../types/ISprint"
import { Button } from "../Button/Button"
import { State } from "../../../types/ITask"

export const TaskListing = () => {
    const initialValues:ISprint={
        id:"none",
        fechaInicio:"none",
        fechaCierre:"none",
        nombre:"none",
        tareas:[{id: "2",
            titulo:"Prueba",
            descripcion:"Pruebas",
            estado:0,
            fechaLimite:"23-06-19"}]
    }
    const [sprint,setSprint]=useState<ISprint>(initialValues)
    const activeSprint=activeSprintStore((state)=>state.activeSprint)
    useEffect(() => {
        if (activeSprint && activeSprint.id !== "none") {
            setSprint(activeSprint)
        }
    }, [activeSprint])
return (
    <div>
    {sprint.id!="none" ? 
    <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
            <div className={styles.textButtonContainer}>
                <p>{sprint?.nombre}</p>
                <Button action={()=>{}} text="Crear Tarea"/>
            </div>
            <div className={styles.columsContainer}>
                <TaskListColum type={0} typeText={"Pendiente"} tasks={sprint.tareas}/>
                <TaskListColum type={1} typeText={"Activo"} tasks={sprint.tareas}/>
                <TaskListColum type={2} typeText={"Terminado"} tasks={sprint.tareas}/>
            </div>
        </div>
    </div>:<p>Cargando...</p>}
    </div>
)
}
