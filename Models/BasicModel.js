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
      console.log('Still Running');
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

  //__Cancellation_reasons Models__
  _GET_cancellation_reasons_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'SELECT * FROM ahlanwshlan.cancellation_reasons WHERE id = ?;',
        [rowID],
        function(err, result) {
          if (err) {
            console.log(err);
            resolve(err);
          }

          console.log('Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify(result[0]));
        },
      );
    });
  }

  _POST_cancellation_reasons_DATA_(body) {
    var DB = this.dbConn;
    // console.log('toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.cancellation_reasons(created_at,updated_at, name, description) VALUES(?,?, ?, ?);',
        [body.created_at, body.updated_at, body.name, body.description],
        function(err, result) {
          if (err) {
            console.log('error: ' + err);
            resolve(err);
          }

          // console.log('Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_cancellation_reasons_DATA_(body) {
    var DB = this.dbConn;
    // console.log('@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.cancellation_reasons SET created_at = ?, updated_at = ?, name = ?, description = ? WHERE id = ?;',
        [
          body.created_at,
          body.updated_at,
          body.name,
          body.description,
          body.id
        ],
        function(err, result) {
          console.log('Resultall: ' + JSON.stringify(result) )
          if (err) {
            console.log(err);
            resolve(err);
          }

          // console.log('Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_cancellation_reasons_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM `cancellation_reasons` WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            console.log(err);
            resolve(err);
          }

          console.log('Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify(result[0]));
        },
      );
    });
  }

  _CallProcedure_() {
    //__Test calling procedure__
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('CALL ProcedureName(?)', [Service_ID], function(err, result) {
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
