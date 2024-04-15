import React, { useState } from 'react';
import axios from 'axios';
function Create() {
  const [task,setTask]=useState("");
  const [description,setDescription]=useState("");
  const handleAdd=()=>{
       axios.post(`${window.location.origin}/add`,{task:task,description:description})
       .then(result=>
        location.reload()
      )
       .catch(error=>
       console.log("error"))
  }
  return (
    <div>
        <input type="text" placeholder="Please enter the title of task" name="" id="" onChange={(e)=> setTask(e.target.value)}/>
        <input type="text" placeholder="Please enter the description" name="" id="" onChange={(e)=> setDescription(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create