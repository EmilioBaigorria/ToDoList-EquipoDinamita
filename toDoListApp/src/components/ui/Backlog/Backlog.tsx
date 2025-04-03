import { useState } from "react"
import { ModalCrearTarea } from "../../modals/ModalCrearTarea/modalCrearTarea"
import { Button } from "../Button/Button"
import { TaskCard } from "../TaskCard/TaskCard"
import styles from "./Backlog.module.css"

export const Backlog = () => {

    const [activeModal, setActiveModal] = useState(false)

    const task: string[] = ["tarea 1", "tarea 2", "tarea 3", "tarea 4", "tarea 5"]
    //const task : string[]=["tarea 1"]
    return (
        <div className={styles.mainBacklogContainer}>
            <div>
                <div>
                    Backlog
                </div>
                <div className={styles.buttonContainer}>
                    <div>
                        Tareas
                    </div>
                    <Button text="Crear Tarea" action={()=>setActiveModal(true)} />
                    <ModalCrearTarea
                    isOpen={activeModal}
                    onClose={()=>setActiveModal(false)}
                    />
                </div>
            </div>
            <div className={styles.taskListContainer}>
                {task.map((el) => (
                    <TaskCard data={el} />
                ))}
            </div>
        </div>
    )
}
