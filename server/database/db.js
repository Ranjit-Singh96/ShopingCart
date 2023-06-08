const mysql=require('mysql');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ranjit123",
    database:"product_cart"
});
connection.connect((err)=>{
    if(err){
        console.log("Mysql database not connected")
    }
    else{
        console.log("Mysql database connected")
    }
});

module.exports=connection;