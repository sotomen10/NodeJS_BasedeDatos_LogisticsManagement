import mysql from 'mysql2/promise';

let pool;

try{
     pool = mysql.createPool({
        host: '',
        user: '',
        database: '',
        port: 3306,
        password: '',
      })
      console.log(`data base is conecting`)

}catch(err){
    console.log(`error data base no is conection${err}`)
}
    

export default pool