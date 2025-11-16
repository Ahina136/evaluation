import React from 'react'
import { useState } from 'react'


function Education() {
const[data,setData]=useState({
   name:"",
   registerNumber:"",
   institution:"",
   degree:"",
   department:"",
   gpa :""

  })
  
    const handler=((event)=>{
      setData({
        ...data,[event.target.name]:event.target.value
      })
      console.log(event.target.name)
    })
     console.log(data)
  const submit=((e)=>{
   e.preventDefault()
   alert("successfully uploaded")
  })

  return (
    
    <div>
        <form>
            <h1>educational qualifications</h1>
           <p> 
           name: <input type='text' value={data.name} name='name' onChange={handler}/>
           </p>
           <p> 
            registerNumber: <input type='number' value={data.registerNumber} name='registerNumber' onChange={handler}/>
           </p>
           <p> 
            institution:<input type='text' value={data.institution} name='institution' onChange={handler}/>
           </p>
           <p> 
            degree<input type='text' value={data.text} name='degree' onChange={handler}/>
           </p>
           <p> 
            department:<input type='text' value={data.department} name='department' onChange={handler}/>
           </p>
           <p> 
           GPA: <input type='number' value={data.gpa} name='gpa' onChange={handler}/>
           </p>
           <button onClick={submit}>submit</button>
        </form>
        </div>
  )
}

export default Education