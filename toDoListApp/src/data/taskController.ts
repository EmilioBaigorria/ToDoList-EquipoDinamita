import axios from "axios";
import { ITask } from "../types/ITask";
import { putTask } from "../http/taskRequest";

const apiUrl=import.meta.env.VITE_APIURL

export const getALLTareas=async():Promise<ITask[]|undefined>=>{
    try {
        const response =await axios.get<{tareas:ITask[]}>(`${apiUrl}/backlog`)
        console.log(`${apiUrl}/backlog`)
        return response.data.tareas
        
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todas las tareas",error)
    }
}
export const crearTarea=async(newTask:ITask)=>{
    try {
        const tareas=await getALLTareas()
        if(tareas){
            await putTask([...tareas,newTask])
        }else{
            await putTask([newTask])
        }
    } catch (error) {
        console.log("Ocurrio un error durante la creacion de una nueva tarea",error)
    }
}