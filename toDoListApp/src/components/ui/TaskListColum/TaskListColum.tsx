import { FC, useEffect, useState } from "react"
import { ITask, State } from "../../../types/ITask"
import styles from "./TaskListColum.module.css"
interface ITaskListColum{
  type:State
  typeText:String
  tasks:ITask[]
}
export const TaskListColum:FC<ITaskListColum> = ({type,typeText,tasks}) => {

  const[filteredTasks,setFilteredTasks]=useState<ITask[]>()

  useEffect(()=>{
    const filtTasks=tasks.filter((el)=>el.estado==type)
    setFilteredTasks(filtTasks)
  },[])
  return (
    <div>
      <div>
        <p>
          {typeText}
        </p>
        <div>
          {filteredTasks?
          filteredTasks.map((el)=>(
            <p>{el.titulo}</p>
          )):<p>Ningura esta asignada a este cuadrante</p>}
        </div>
      </div>
    </div>
  )
}
