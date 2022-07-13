import axios from "axios"
export const getdata=()=>{
    return axios.get("http://localhost:8080/data")    
}
export const adddata=(text,state)=>{
    return axios.post(" http://localhost:8080/data",{title:text,status:state})
}
export const deletedata=(id)=>{
    return axios.delete(`http://localhost:8080/data/${id}`)
}
export const updatedata=(id,state)=>{
    return axios.patch(`http://localhost:8080/data/${id}`,{status:state})
}