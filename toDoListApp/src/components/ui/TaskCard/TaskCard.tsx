import { FC } from "react"
import styles from "./TaskCard.module.css"
import { Button } from "../Button/Button"
interface ITaskCard{
    data:string
}
export const TaskCard:FC<ITaskCard> = ({data}) => {
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftDataContainer}>
        <p>
          Titulo:{data}
        </p>
        <p>
          Descripcion:{}
        </p>
      </div>
      <div className={styles.rightDataContainer}>
        <Button text="Enviar a" action={()=>{}}/>
        <p>dropdown</p>
        <Button text="Eye" action={()=>{}}/>
        <Button text="Edit" action={()=>{}}/>
        <Button text="Delete" action={()=>{}}/>

      </div>
    </div>
  )
}
