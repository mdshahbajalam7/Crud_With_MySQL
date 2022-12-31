import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./data.module.css";
import { useNavigate } from "react-router-dom";
function Employee() {
  const [getdata, setGetdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3500/employees`)
      .then(({ data }) => {
        console.log(data);
        setGetdata(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletebutton = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3500/employeesdelete/${id}`)
      .then(({ data }) => {
        console.log(data);
        setGetdata(
          getdata.filter((elem) => {
            return elem.id != id;
          })
        );
      })
      .catch((err) => console.log(err));
  };
  const editclick = (id) => {
    navigate(`/employesedit/${id}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <span style={{ color: "Teal" }}>A</span>ll{" "}
        <span style={{ color: "Red" }}>E</span>mployee <span style={{color:"green"}}>D</span>ata{" "}
      </h1>
      <table className={styles.tablediv}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}>Country</th>
            <th className={styles.th}>Position</th>
            <th className={styles.th}>Wage</th>
            <th className={styles.th}>Edit</th>
            <th className={styles.th}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {getdata.map((elem) => (
            <tr className={styles.tr} key={elem.id}>
              <td className={styles.td}>{elem.id}</td>
              <td className={styles.td}>{elem.name}</td>
              <td className={styles.td}>{elem.age}</td>
              <td className={styles.td}>{elem.country}</td>
              <td className={styles.td}>{elem.position}</td>
              <td className={styles.td}>{elem.wage}</td>
              <td className={styles.td}>
                <button
                  className={styles.btn1}
                  onClick={() => editclick(elem.id)}
                >
                  Edit
                </button>
              </td>
              <td className={styles.td}>
                <button
                  className={styles.btn1}
                  onClick={() => deletebutton(elem.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
