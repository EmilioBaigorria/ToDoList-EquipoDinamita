
import axios from "axios";
import { ISprint } from "../types/ISprint";
import { ISprintList } from "../types/ISprintList";
import { putSprint } from "../http/sprintRequest";


const apiUrl=import.meta.env.VITE_APIURL

export const getALLSprints=async():Promise<ISprint[]|undefined>=>{
    try {
        const response =await axios.get<ISprintList>(`${apiUrl}/sprintList`)
        return response.data.sprints
        
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todas los sprints",error)
    }
}
export const crearSprint=async(newSprint:ISprint)=>{
    try {
        const sprints=await getALLSprints()
        if(sprints){
            await putSprint([...sprints,newSprint])
        }else{
            await putSprint([newSprint])
        }
        return newSprint
    } catch (error) {
        console.log("Ocurrio un error durante la creacion de un nuevo sprint",error)
    }
}
export const eliminarTareaByID=async(sprintId:string)=>{
    try {
        const sprints=await getALLSprints()
        if(sprints){
            const newSprintList=sprints.filter((el)=>
                el.id!==sprintId
            )
            
            await putSprint(newSprintList)
            return newSprintList
        } 
    } catch (error) {
        console.log("Ocurrio un error durante la eliminacion de un sprint",error)
    }
}

export const actualizarTarea=async(sprintActualizada:ISprint)=>{
    try {
        const sprints=await getALLSprints()
        if(sprints){
            const newSprintList=sprints.map((sprint)=>
                sprint.id==sprintActualizada.id ? {...sprint,...sprintActualizada}: sprint
            )
            await putSprint(newSprintList)
            return newSprintList
        }else{
            return null
        }
    } catch (error) {
        console.log("Ocurrio un error durante la actualizacion de un sprint",error)
    }
    
}