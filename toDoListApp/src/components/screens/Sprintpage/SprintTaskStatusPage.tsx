import { useState } from "react"
import { ModalCrearSprint } from "../../modals/ModalCrearSprint/modalCrearSprint"
import { ModalEditarSprint } from "../../modals/ModalEditarSprint/modalEditarSprint"
import { ModalVerSprint } from "../../modals/ModalVerSprint/modalVerSprint"
import { Header } from "../../ui/Header/Header"
import { SprintList } from "../../ui/SprintList/SprintList"
import { TaskListing } from "../../ui/TaskListing/TaskListing"
import styles from "./SprintTaskStatusPage.module.css"

export const SprintTaskStatusPage = () => {
    const [crearSprintModal, setCrearSprintModal] = useState(false)
    const [editarSprintModal, setEditarSprintModal] = useState(false)
    const [verSpringModal, setVerSprintModal] = useState(false)
    return (
        <div className={styles.mainAdminContainer}>
            {/*Modales de de columnas*/}
            
            {/*Modales de sprint*/}
            <ModalCrearSprint
                isOpen={crearSprintModal}
                onClose={() => setCrearSprintModal(false)}
            />
            <ModalEditarSprint
                isOpen={editarSprintModal}
                onClose={() => setEditarSprintModal(false)}
            />
            <ModalVerSprint
                isOpen={verSpringModal}
                onClose={() => setVerSprintModal(false)}
            />
            <div>
                <Header />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentContainer_sprintList}>
                    <SprintList
                        setCrearSprintModal={setCrearSprintModal}
                        setEditarSprintModal={setEditarSprintModal}
                        setVerSprintModal={setVerSprintModal}
                    />
                </div>
                <div className={styles.contentContainer_taskListing}>
                    <TaskListing />
                </div>
            </div>
        </div>
    )
}
