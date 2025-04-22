import { FC, useEffect, useState } from "react"
import { ITask, State } from "../../../types/ITask"
import styles from "./TaskListColum.module.css"
import { ColumTaskCard } from "../ColumTaskCard/ColumTaskCard"
interface ITaskListColum {
  type: State
  typeText: String
  tasks: ITask[]
}
export const TaskListColum: FC<ITaskListColum> = ({ type, typeText, tasks }) => {

  const [filteredTasks, setFilteredTasks] = useState<ITask[]>()

  useEffect(() => {
    const filtTasks = tasks.filter((el) => el.estado == type)
    setFilteredTasks(filtTasks)
  }, [])
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer_content}>
        <p>
          {typeText}
        </p>
        <div className={styles.taskCoantainer}>
          {filteredTasks && filteredTasks.length>0  ?
            filteredTasks.map((el) => (
              <ColumTaskCard key={el.id} task={el}/>
            )) : <p>Ningura esta asignada a este cuadrante</p>}
        </div>
      </div>
    </div>
  )
}
