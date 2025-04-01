import { ITask } from "../types/ITask";
import 'dotenv/config'
const apiUrl=process.env.APIURL

export const putTask=async(el:ITask[])=>{
    try {
        const response=await fetch(`${apiUrl}/backlog`,{
            method:"PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(el)
        })
        return response.json
    } catch (error) {
        console.log("Ocurrio un erro actualizando las tareas",error)
    }
}