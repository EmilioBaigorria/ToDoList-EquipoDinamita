import { FC, useEffect, useState } from "react"
import { ITask, State } from "../../../types/ITask"
import styles from "./TaskListColum.module.css"
interface ITaskListColum{
  type:State
  typeText:String
  tasks:ITask[]
}
export const TaskListColum:FC<ITaskListColum> = ({type,typeText,tasks}) => {

  const[filteredTasks,setFilteredTasks]=useState()

  useEffect(()=>{
    const filtTasks=tasks.filter((el)=>el.estado==type)
  },[])
  return (
    <div>
      <div>
        <p>
          {typeText}
        </p>
        <div>

        </div>
      </div>
    </div>
  )
}
