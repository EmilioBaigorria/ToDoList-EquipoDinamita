import { Backlog } from "../../ui/Backlog/Backlog"
import styles from "./Administration.module.css"
import { Header } from "../../ui/Header/Header"
import { SprintList } from "../../ui/SprintList/SprintList"
import { useState } from "react"
import { ModalEditarSprint } from "../../modals/ModalEditarSprint/modalEditarSprint"
import { ModalCrearSprint } from "../../modals/ModalCrearSprint/modalCrearSprint"
import { ModalVerSprint } from "../../modals/ModalVerSprint/modalVerSprint"
import { ModalCrearTarea } from "../../modals/ModalCrearTarea/modalCrearTarea"
import { ModalEditarTarea } from "../../modals/ModalEditarTarea/modalEditarTarea"
import { ModalVerTarea } from "../../modals/ModalVerTarea/modalVerTarea"


export const Administration = () => {

  const [createTareaModal, setCreateTareaModal] = useState(false)
  const [editTareaModal, setEditTareaModal] = useState(false)
  const [verTareaModal, setVerTareaModal] = useState(false)

  const [crearSprintModal, setCrearSprintModal] = useState(false)
  const [editarSprintModal, setEditarSprintModal] = useState(false)
  const [verSpringModal, setVerSprintModal] = useState(false)



  return (
    <div className={styles.mainAdminContainer}>
      {/*Modales de Tarea*/}
      <ModalCrearTarea
        isOpen={createTareaModal}
        onClose={() => setCreateTareaModal(false)}
      />
      <ModalEditarTarea
        isOpen={editTareaModal}
        onClose={() => setEditTareaModal(false)}
      />
      <ModalVerTarea
        isOpen={verTareaModal}
        onClose={() => setVerTareaModal(false)}
      />
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
        <div>
          <Backlog
            setCreateTareaModal={setCreateTareaModal}
            setEditTareaModal={setEditTareaModal}
            setVerTareaModal={setVerTareaModal}
          />
        </div>
      </div>
    </div>
  )
}
