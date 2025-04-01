import styles from "./Administration.module.css"
import { Header } from "../../ui/Header/Header"
import { Backlog } from "../../ui/Backlog/Backlog"
import { getALLTareas } from "../../../data/taskController"


export const Administration = () => {
  const test=async()=>{
    const response=await getALLTareas()
    console.log(response)
  }
  return (
    <div className={styles.mainAdminContainer}>
        <div>
          <button onClick={test}>TEST</button>
        </div>
        <div>
            <Header/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.contentContainer_sprintList}>Sprint list</div>
            <div>
                <Backlog/>
            </div>
        </div>
    </div>
  )
}
