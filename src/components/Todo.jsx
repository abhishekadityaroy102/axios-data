import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import { adddata, deletedata, getdata, updatedata } from './server'
import Todolist from './Todolist'

const Todo = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
       handledata()
    },[])
    const handledata=()=>{
        getdata().then((res)=>setdata(res.data))
    }
    const handleadd=(text,state)=>{
        adddata(text,state).then((res)=>handledata())
        // handledata()
         
     }
     const handledelete=(id)=>{
       deletedata(id).then((res)=>handledata())
       
     }
     const handleupdate=(state,id)=>{
      updatedata(id,state).then((res)=>handledata())
    //   handledata()
     }
   console.log(data)
  return (
    <div>
        <AddTodo handleadd={handleadd}/>
        <Todolist data={data} handledelete={handledelete} update={handleupdate}/>
    </div>
  )
}

export default Todo