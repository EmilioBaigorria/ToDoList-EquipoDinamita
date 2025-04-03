
import { ISprint } from "../../../types/ISprint"
import { ISprintList } from "../../../types/ISprintList"
import { Button } from "../Button/Button"
import { SprintListCard } from "../SprintListCard/SprintListCard"
import styles from "./SprintList.module.css"

export const SprintList = () => {
    const randSprint={
        id:"2",
        fechaInicio:"02-03-2025",
        fechaCierre:"04-05-2025",
        nombre:"toDoList",
        tareas:[]
        }
    
    const sprintListContent:ISprint[]=[randSprint,randSprint,randSprint,randSprint]

  return (
    <div className={styles.mainContainer}>
        <div className={styles.mainContainer_contentContainer}>
            <div>
                <Button text="Backlog" action={()=>{}}/>
            </div>
            <div className={styles.contentContainer_sprintList_buttonSection}>
                <p>Sprints</p>
                <Button text="CrearSprint" action={()=>{}}/>
            </div>
            <div className={styles.sprintListContainer}>
            {sprintListContent.map((sprint)=>(
                <SprintListCard sprint={sprint}/>
            ))}
            </div>
        </div>
        <div className={styles.bar}>
            {/*Barra*/}
        </div>
    </div>
  )
}
