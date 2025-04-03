import { FC } from "react"
import styles from "./Button.module.css"

interface IButton{
    text:string
    action:VoidFunction
}
export const Button:FC<IButton> = ({text,action}) => {
    const useAction=()=>{
        action()
    }
  return (
    <div>
        <button className={styles.button} onClick={useAction}>{text}</button>
    </div>
  )
}
