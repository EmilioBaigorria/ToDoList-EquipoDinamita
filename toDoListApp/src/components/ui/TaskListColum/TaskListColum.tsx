import { FC, useEffect, useState } from "react"
import { ITask, State } from "../../../types/ITask"
import styles from "./TaskListColum.module.css"
interface ITaskListColum{
  typeText:String
  tasks:ITask[]
}
export const TaskListColum:FC<ITaskListColum> = ({typeText,tasks}) => {


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
