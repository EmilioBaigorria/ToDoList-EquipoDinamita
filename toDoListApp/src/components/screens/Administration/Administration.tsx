import { Backlog } from "../../ui/Backlog/Backlog"
import { Header } from "../../ui/Header/Header"
import styles from "./Administration.module.css"


export const Administration = () => {
    return (

        <div className={styles.mainAdminContainer}>
            <div>
                <Header />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentContainer_sprintList}>Sprint list</div>
                <div>
                    <Backlog />
                </div>
            </div>
        </div>
    )
}
