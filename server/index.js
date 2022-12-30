const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root700",
  database: "employee",
  // insecureAuth : true,
  fatal: true,
});

database.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  database.query(
    "INSERT INTO employees_table (name,age,country,position,wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("VALUE Insrted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  database.query("SELECT * from employees_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // res.send("get data")
      res.status(200).send(result);
      // console.log(result);
    }
  });
});

app.get("/employeesget/:id",(req,res)=>{
  const id = req.params.id
  database.query("SELECT * from employees_table WHERE id= ?",id,(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result)
    }
  })
})

app.put("/employeesupdate/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  database.query(
    "UPDATE employees_table SET name=?,age=?,country=?,position=?,wage=? WHERE id= ? ",
    [name, age, country, position, wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/employeesdelete/:id", (req, res) => {
  const id = req.params.id;
  database.query(
    "DELETE FROM employees_table WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res
          .status(201)
          .send({ Message: "delete successfully", result: result });
        console.log(result);
      }
    }
  );
});

app.listen(3500, () => {
  console.log(`Your server running on port 3500`);
});
