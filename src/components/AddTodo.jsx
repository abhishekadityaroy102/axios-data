import React, { useState } from 'react'
import { adddata, getdata } from './server'

const AddTodo = ({handleadd}) => {
    const [text,settext]=useState("")
    const handlechange=(e)=>{
    settext(e.target.value)
    }
    
          return (
    <div>
        <input type="text" value={text} placeholder='Write something' onChange={handlechange}></input>
        <button onClick={()=>{handleadd(text,false),settext("")}}>ADD</button>
    </div>
  )
}

export default AddTodo