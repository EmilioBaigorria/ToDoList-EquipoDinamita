import { useEffect, useState } from "react"
import { ModalCrearTarea } from "../../modals/ModalCrearTarea/modalCrearTarea"
import { Button } from "../Button/Button"
import { TaskCard } from "../TaskCard/TaskCard"
import styles from "./Backlog.module.css"
import { getALLTareas } from "../../../data/taskController"
import { ITask } from "../../../types/ITask"
import { ModalEditarTarea } from "../../modals/ModalEditarTarea/modalEditarTarea"
import { ModalVerTarea } from "../../modals/ModalVerTarea/modalVerTarea"

export const Backlog = () => {
    const [createTareaModal, setCreateTareaModal] = useState(false)
    const [editTareaModal, setEditTareaModal] = useState(false)
    const [verTareaModal, setVerTareaModal] = useState(false)
    const [taskList, setTaskList] = useState<ITask[]>([])

    const getTareas = async () => {
        const task = await getALLTareas()
        if (task) {
            setTaskList(task)
        }
    }

    useEffect(() => {
        getTareas()
    }, [])

    return (
        <div className={styles.mainBacklogContainer}>
            <ModalCrearTarea
                isOpen={createTareaModal}
                onClose={() => setCreateTareaModal(false)}
            />
            <ModalEditarTarea
                isOpen={editTareaModal}
                onClose={() => setEditTareaModal(false)}
            />
            <ModalVerTarea
                isOpen={verTareaModal}
                onClose={() => setVerTareaModal(false)}
            />
            
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>Backlog</h1>
                <div className={styles.buttonContainer}>
                    <span className={styles.sectionTitle}>Tareas</span>
                    <Button 
                        text="Crear Tarea" 
                        action={() => setCreateTareaModal(true)} 
                        className={styles.createButton}
                    />
                </div>
            </div>

            <div className={styles.taskListContainer}>
                {taskList.map((task) => (
                    <TaskCard 
                        key={task.id}
                        data={task}
                        setEditTareaModal={setEditTareaModal}
                        setVerTareaModal={setVerTareaModal}
                    />
                ))}
            </div>
        </div>
    )
}
