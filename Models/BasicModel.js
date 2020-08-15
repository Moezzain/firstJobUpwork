const mysql = require('mysql');
/*
  model calss handels all the processes related to the database.
*/

class modelClass {
    //__calss constructor where all the variables are creat it and init__
    constructor() {
      //__sql DB parameters get it from .env file__
      this.dbConn = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        connectionLimit: 10, // this is the max number of connections before your pool starts waiting for a release
        multipleStatements: true, // I like this because it helps prevent nested sql statements, it can be buggy though, so be careful
      });
  
          //__DB on connect action ( eihter success or fail )__
    this.dbConn.connect(err => {
        if (err) {
          console.log('Error while connecting database :- ' + err);
          //         {
          console.log(err);
          // resolve('Error');
          // }
        } else {
          console.log('Connected!');
          console.log(err);
        }
        console.log('Still Running')
      });
    }
  
      //__Test query to check connection__
  _GetInq_() {
    //__Test doing query__
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
        DB.query('SELECT * FROM ?', ['testnodeconnection'], function(
      err,
      result,
    ) {

        if (err) {
        console.log(err);
        // resolve('Error');
      }

      console.log('Result: ', result /* [0][1].email */); //when using procedures
      resolve(JSON.stringify(result));
    });
  });
}

  _CallProcedure_() {
    //__Test calling procedure__
        var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('CALL ProcedureName(?)', [Service_ID], function(
        err,
        result,
      ) {

        if (err) {
          console.log(err);
          resolve('Error');
        }

        console.log('Result: ', JSON.stringify(result[0]) /* [0][1].email */); //when using procedures
        resolve(JSON.stringify(result[0]));
      });
    });
  }

}

let Model = new modelClass();
module.exports = Model;
