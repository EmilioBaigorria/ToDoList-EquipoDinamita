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
      <div>
        <p>
          {typeText}
        </p>
        <div className={styles.tasksContainer}>
          {tasks?
          tasks.map((el)=>(
            <p>{el.titulo}</p>
          )):<p>Ningura esta asignada a este cuadrante</p>}
        </div>
      </div>
    </div>
  )
}
