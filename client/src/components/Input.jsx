import React from "react";
import { useState } from "react";
import styles from './data.module.css'

function Input() {
    const [name,setname]=useState("")
    const [age,setage]=useState(0)
    const [country,setcountry]=useState('')
    const [position,setposition]=useState('')
    const [wage,setwage]=useState(0)

    const handleclick=()=>{
        let newobj={
            name:name,
            age:age,
            country:country,
            position:position,
            wage:wage

        }
        console.log(newobj);

    }
  return (
    <div className={styles.container}>
      <label>Name: </label>
      <input type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
      <label>Age: </label>
      <input type="Number" placeholder="Age" name="age" value={age} onChange={(e)=>setage(e.target.value)}/>
      <label>Country: </label>
      <input type="text" placeholder="Country" name="country"  value={country} onChange={(e)=>setcountry(e.target.value)}/>
      <label>Position: </label>
      <input type="text" placeholder="Position" name="position" value={position} onChange={(e)=>setposition(e.target.value)} />
      <label>wage (Years): </label>
      <input type="Number" placeholder="wage" name="wage" value={wage} onChange={(e)=>setwage(e.target.value)} />
      <button onClick={handleclick}>Add Employes</button>
    </div>
  );
}

export default Input;
