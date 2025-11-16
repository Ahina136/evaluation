import React, {  } from 'react'
import { useState } from 'react'
import datacontext from './Context'
import Education from  './Education'
import EXperience from './Experiene'

function Personal() {
  const[data,setData]=useState({
    name:"",
    contact:"",
    email:"",
    age:""

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
    <datacontext.Provider value={{data,setData}}>
    <div>
      <form>
        <h1>Personal details</h1>
        <p>name:
          <input type='text' value={data.name} name='name' onChange={handler}/>
        
        </p>
        <p>
          contact:<input type='number' value={data.contact} name='contact' onChange={handler}/>
        </p>
         <p>
          email:<input type='email' value={data.email} name='email' onChange={handler}/>
        </p>
         <p>
          age:<input type='age' value={data.age} name='age' onChange={handler}/>
        </p>
        <button onClick={submit}>submit</button>
      </form>
    </div>
    <Education/>
    <EXperience/>
    </datacontext.Provider>
  )
}

export default Personal