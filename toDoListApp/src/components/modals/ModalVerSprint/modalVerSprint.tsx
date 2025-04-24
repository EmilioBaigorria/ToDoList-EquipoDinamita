import { FC, useEffect } from "react";
import { VscCheck, VscChromeClose } from "react-icons/vsc";
import styles from "./../MGenerico/modalGenerico.module.css";

interface IModalVerSprint {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalVerSprint: FC<IModalVerSprint> = ({ isOpen, onClose }) => {

    const tareasGenericas = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 1", "Tarea 2", "Tarea 3"]

    isOpen = false

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div style={{display: isOpen ? "" : "none"}}>
            <form>
                <div>
                    <div>
                        <p className={styles.fieldTitle}>Nombre:</p>
                        <input type="text" placeholder="Nombre:" className={styles.fieldInput} />
                    </div>
                    <div>
                        <p className={styles.fieldTitle}>Fecha inicio:</p>
                        <input type="date" className={styles.fieldInput} />
                    </div>
                    <div>
                        <p className={styles.fieldTitle}>Fecha cierre:</p>
                        <input type="date" className={styles.fieldInput} />
                    </div>
                    <div>
                        <p className={styles.fieldTitle}>Listado tareas:</p>
                        <select className={styles.fieldInput} >
                            {tareasGenericas.map((tarea, index) => (
                                <option key={index} value={tarea}>
                                    {tarea}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.fieldButtons}>
                    <button className={styles.cancelButton}><VscChromeClose /></button>
                    <button className={styles.acceptButton}><VscCheck /></button>

                </div>
            </form>
        </div>
    );
};