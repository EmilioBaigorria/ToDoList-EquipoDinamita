import { FC } from "react"
import styles from "./modalGenerico.module.css"

interface IModalGenerico {
    isOpen: boolean,
    onClose: ()=>void,
    title: string,
    fields: ("titulo" | "descrpicion" | "estado" | "fechaLimite" | "nombre" | "fechaInicio" | "fechaCierre" | "listadoTareas")[]
}

export const ModalGenerico: FC<IModalGenerico> = ({ isOpen, onClose, title, fields }) => {

    if (!isOpen) return null

    return (
        <div className={styles.background}>
            <div className={styles.modalGlobal}>
               <h2>{title}</h2>
            <form>
                {fields.includes("titulo") && (
                    <>
                        <p className={styles.fieldTitle}>Título:</p>
                        <input type="text" placeholder="Título:" className={styles.fieldInput} />
                    </>)}
            </form>
            <button onClick={onClose}>Cerrar</button> 
            </div>
            
        </div>
    )
}
