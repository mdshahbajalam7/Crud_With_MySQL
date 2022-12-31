import React, { useState } from "react";
import axios from "axios";
import styles from "./data.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { BASEURL } from "../App";

function Employessedit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [country, setcountry] = useState("");
  const [position, setposition] = useState("");
  const [wage, setwage] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASEURL}/employeesget/${id}`)
      .then(({ data }) => {
        let getData = data[0];
        setname(getData.name);
        setage(getData.age);
        setcountry(getData.country);
        setposition(getData.position);
        setwage(getData.wage);
      })
      .catch((err) => console.log(err));
  }, []);

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
      .put(`${BASEURL}/employeesupdate/${id}`, newobj)
      .then(({ data }) => {
        console.log(data);
        navigate("/employee");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <h1 style={{textAlign:"center"}}>Update Employee Data </h1>
      <TextField
        style={{ width: "60%", margin: "auto" }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <TextField
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Age"
        variant="outlined"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <TextField
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Country"
        variant="outlined"
        value={country}
        onChange={(e) => setcountry(e.target.value)}
      />
      <TextField
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Position"
        variant="outlined"
        value={position}
        onChange={(e) => setposition(e.target.value)}
      />
      <TextField
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Wage(salary (Y))"
        variant="outlined"
        value={wage}
        onChange={(e) => setwage(e.target.value)}
      />
      <Button
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        onClick={handleclick}
        variant="contained"
        disableElevation
      >
        Update Employee
      </Button>
    </div>
  );
}

export default Employessedit;
