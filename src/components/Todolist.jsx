import React, { useEffect, useState } from 'react'
import { getdata } from './server'

const Todolist = ({data,handledelete,update}) => {
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    // getdata().then((res)=>setdata(res.data))
    // },[])
    // console.log("todolist",data)
  return (
    <div>Todolist
        {
            data.map((el)=><div>
                <h2>{el.title}</h2>
                <button onClick={()=>update(!el.status,el.id)}>{el.status ? "Completed":"Not Completed"}</button>
                <button onClick={()=>handledelete(el.id)}>Delete</button>
            </div>)
        }
        
    </div>
  )
}

export default Todolist