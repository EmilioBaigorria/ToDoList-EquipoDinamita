
import { useEffect, useState } from "react"
import { ISprint } from "../../../types/ISprint"
import { Button } from "../Button/Button"
import { SprintListCard } from "../SprintListCard/SprintListCard"
import styles from "./SprintList.module.css"
import { getALLSprints } from "../../../data/sprintController"

export const SprintList = () => {
    const [sprints,setSprints]=useState<ISprint[]>([])

    const getSpr=async()=>{
        const sprints=await getALLSprints()
        if(sprints){
            setSprints(sprints)
        }
    }
    useEffect(()=>{
        getSpr()
    },[])
    

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
            {sprints.map((sprint)=>(
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
