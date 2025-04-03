import { FC } from "react"
import { ISprint } from "../../../types/ISprint"
import styles from "./SprintListCard.module.css"
import { Button } from "../Button/Button"

interface ISprintListCard{
    sprint:ISprint
}
export const SprintListCard:FC<ISprintListCard> = ({sprint}) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.mainContainer_sprintInfoContainer}>
            <div>{/*Nombre del sprint*/}
                <p>{sprint.nombre}</p>
            </div>
            <div>{/*Fecha de inicio y fin*/}
                <p>{sprint.fechaInicio}</p>
                <p>{sprint.fechaCierre}</p>
            </div>
        </div>
        <div className={styles.mainContainer_buttonContainer}>{/*Botones*/}
            <Button action={()=>{}} icon={<span className="material-symbols-outlined">visibility</span>}/>
            <Button action={()=>{}} icon={<span className="material-symbols-outlined">edit</span>}/>
            <Button  action={()=>{}} icon={<span className="material-symbols-outlined">delete</span>} />
        </div>
    </div>
  )
}
