import React, { useState } from "react";
import axios from "axios";
import styles from "./data.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Employessedit() {
  const {id} = useParams();
  console.log("id",id);
  const [Data,setdata]=useState({})
  console.log("Data",Data);
  const [name, setname] = useState(Data[0].name);
  const [age, setage] = useState(0);
  const [country, setcountry] = useState("");
  const [position, setposition] = useState("");
  const [wage, setwage] = useState(0);

  useEffect(()=>{
    axios
    .get(`http://localhost:3500/employeesget/${id}`)
    .then(({ data }) => {
      console.log(data);
    //   let filter = data.filter((elem)=>elem.id==id)
    //   console.log(filter);
      setdata(data);
    })
    .catch((err) => console.log(err));
  },[])

  const handleclick = () => {
    let newobj = {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    };
    console.log(newobj);
    axios
      .post(`http://localhost:3500/create`, newobj)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <label>Age: </label>
      <input
        type="Number"
        placeholder="Age"
        name="age"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <label>Country: </label>
      <input
        type="text"
        placeholder="Country"
        name="country"
        value={country}
        onChange={(e) => setcountry(e.target.value)}
      />
      <label>Position: </label>
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={position}
        onChange={(e) => setposition(e.target.value)}
      />
      <label>wage (Years): </label>
      <input
        type="Number"
        placeholder="wage"
        name="wage"
        value={wage}
        onChange={(e) => setwage(e.target.value)}
      />
      <button onClick={handleclick}>Add Employes</button>
    </div>
  );
}

export default Employessedit;
