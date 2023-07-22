// console.log("Node with MySql");
var mysql = require("mysql");
var databaseConnect = {
    host:"localhost",
    user:"root",
    password:"",
    database:"university"
}
var conn = mysql.createConnection(databaseConnect);
// conn.connect();
conn.connect((err)=>{
    if(err){
        console.log("Coonection Failed");
    }
    else{
        console.log("Connection Successful");

        InsertData(conn);
        UpdateData(conn);
    }
})
// to run: npm start (terminal)
function InsertData(conn) {
    let SQLQuery="INSERT INTO `students`(`name`, `roll`, `class`) VALUES ('Tushar','3549','BSc in CSE')"
    conn.query(SQLQuery,(error)=> {
        if(error){
            console.log("Data Insert Failed");
        }
        else{
            console.log("Data Insert Success");
        }
    })
}

function UpdateData(conn) {
    let SQLQuery="UPDATE `students` SET `name`='Sakib',`class`='Twelve' WHERE `id`='3549'";
    conn.query(SQLQuery, (error) =>{
        if(error){
            console.log("Data Update Failed");
        }
        else{
            console.log("Data Update Success");
        }
    })
}
