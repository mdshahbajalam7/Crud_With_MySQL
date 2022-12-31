import React from "react";
import { useState } from "react";
import styles from "./data.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BASEURL } from "../App";

function Input() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [age, setage] = useState(null);
  const [country, setcountry] = useState("");
  const [position, setposition] = useState("");
  const [wage, setwage] = useState(null);

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
      .post(`${BASEURL}/create`, newobj)
      .then(({ data }) => {
        console.log(data);
        navigate("/employee");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <span style={{ color: "orange" }}>E</span>mployee <span>D</span>ata{" "}
        <span style={{ color: "greenyellow" }}>A</span>dding
      </h1>
      <TextField
        required
        style={{ width: "60%", margin: "auto" }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <TextField
        type="number"
        required
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Age"
        variant="outlined"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <TextField
        required
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Country"
        variant="outlined"
        value={country}
        onChange={(e) => setcountry(e.target.value)}
      />
      <TextField
        required
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Position"
        variant="outlined"
        value={position}
        onChange={(e) => setposition(e.target.value)}
      />
      <TextField
        required
        type="number"
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        id="outlined-basic"
        label="Wage(salary (Y))"
        variant="outlined"
        value={wage}
        onChange={(e) => setwage(e.target.value)}
      />
      <Button
        required
        style={{ width: "60%", margin: "auto", marginTop: "30px" }}
        onClick={handleclick}
        variant="contained"
        disableElevation
      >
        Add Employee
      </Button>
    </div>
  );
}

export default Input;
