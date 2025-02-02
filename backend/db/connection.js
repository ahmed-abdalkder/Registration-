
 import mysql from 'mysql2'
 
 const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password :  "",
    database : 'fallstak'
  });
   
  connection.connect((err)=>{
    if (err) {
      console.log('error connecting: ' );
     
    }else{
    console.log(" connection database");
    }
  });

  export default connection