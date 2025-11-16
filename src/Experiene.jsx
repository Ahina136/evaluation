import React from 'react'
import { useState } from 'react'

function Experiene() {
    const[data1,setData1]=useState({
        name:"",
        companyName:"",
        position:"",
        duration:""
      })
      
        const handler=((event)=>{
          setData1({
            ...data1,[event.target.name]:event.target.value
          })
          console.log(event.target.name)
        })
         console.log(data1)
      const submit=((e)=>{
       e.preventDefault()
       alert("successfully uploaded")
      })
  return (
    <div>
        <form>
            <h1>work experience</h1>
            <p>
               name: <input type='text' value={data1.name} name='name' onChange={handler}/>
            </p>
            <p>
               company name: <input type='text' value={data1.companyName} name='companyName' onChange={handler}/>
            </p>
            <p>
               position <input type='text' value={data1.position} name='position' onChange={handler}/>
            </p>
            <p>
               duration: <input type='number' value={data1.duration} name='duration' onChange={handler}/>
            </p>
            <button onClick={submit}>submit</button>
        </form>
    </div>
  )
}

export default Experiene