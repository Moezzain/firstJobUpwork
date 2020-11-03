const mysql = require('mysql');
//__Logger__
const {logMessage, Info, logError} = require('../Services/loggingService');

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
        logMessage(logError, 'Error while connecting database :- ' + err);
      } else {
        logMessage(Info, 'Data Base Connected!');
      }
    });
  }

  //__Appinformations Models__
  _GET_appinformations_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info, rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.appinformations WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.appinformations;';

    logMessage(Info, 'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info, err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_appinformations_DATA_(body) {
    var DB = this.dbConn;
    logMessage(
      Info,
      'toString(body.created_at=== "" ? null : body.created_at: ' +
        JSON.stringify(body),
    );
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.appinformations(name,aboutUs,colorTheme,email,phone,whatsApp,facebook,minRequests,created_at,updated_at,twitter,privacyPolicy,userAgreement,whyUS,howItsWork,FAQ,logo,googlePlayUrl,appStoreUrl,linkdin,instgram,platformPolicy,deliveryPolicy,cancelationPolicy,returnPolicy,driverRegistrationPolicy) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.name === '' ? null : body.name,
          body.aboutUs === '' ? null : body.aboutUs,
          body.colorTheme === '' ? null : body.colorTheme,
          body.email === '' ? null : body.email,
          body.phone === '' ? null : body.phone,
          body.whatsApp === '' ? null : body.whatsApp,
          body.facebook === '' ? null : body.facebook,
          body.minRequests === '' ? null : body.minRequests,
          body.created_at === '' ? null : body.created_at,
          body.updated_at === '' ? null : body.updated_at,
          body.twitter === '' ? null : body.twitter,
          body.privacyPolicy === '' ? null : body.privacyPolicy,
          body.userAgreement === '' ? null : body.userAgreement,
          body.whyUS === '' ? null : body.whyUS,
          body.howItsWork === '' ? null : body.howItsWork,
          body.FAQ === '' ? null : body.FAQ,
          body.logo === '' ? null : body.logo,
          body.googlePlayUrl === '' ? null : body.googlePlayUrl,
          body.appStoreUrl === '' ? null : body.appStoreUrl,
          body.linkdin === '' ? null : body.linkdin,
          body.instgram === ''
            ? null
            : body.instgram === ''
            ? null
            : body.instgram === ''
            ? null
            : body.instgram,
          body.platformPolicy === '' ? null : body.platformPolicy,
          body.deliveryPolicy === '' ? null : body.deliveryPolicy,
          body.cancelationPolicy === '' ? null : body.cancelationPolicy,
          body.returnPolicy === '' ? null : body.returnPolicy,
          body.driverRegistrationPolicy === ''
            ? null
            : body.driverRegistrationPolicy,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info, 'error: ' + err);
            resolve(err);
          }

          logMessage(Info, 'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_appinformations_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name=== "" ? null : body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.appinformations SET name = ?, aboutUs = ?, colorTheme = ?, email = ?, phone = ?, whatsApp = ?, facebook = ?, minRequests = ?, created_at = ?, updated_at = ?, twitter = ?, privacyPolicy = ?, userAgreement = ?, whyUS = ?, howItsWork = ?, FAQ = ?, logo = ?, googlePlayUrl = ?, appStoreUrl = ?, linkdin = ?, instgram = ?, platformPolicy = ?, deliveryPolicy = ?, cancelationPolicy = ? , returnPolicy = ?, driverRegistrationPolicy = ? WHERE id = ?;',
        [
          body.name === '' ? null : body.name,
          body.aboutUs === '' ? null : body.aboutUs,
          body.colorTheme === '' ? null : body.colorTheme,
          body.email === '' ? null : body.email,
          body.phone === '' ? null : body.phone,
          body.whatsApp === '' ? null : body.whatsApp,
          body.facebook === '' ? null : body.facebook,
          body.minRequests === '' ? null : body.minRequests,
          body.created_at === '' ? null : body.created_at,
          body.updated_at === '' ? null : body.updated_at,
          body.twitter === '' ? null : body.twitter,
          body.privacyPolicy === '' ? null : body.privacyPolicy,
          body.userAgreement === '' ? null : body.userAgreement,
          body.whyUS === '' ? null : body.whyUS,
          body.howItsWork === '' ? null : body.howItsWork,
          body.FAQ === '' ? null : body.FAQ,
          body.logo === '' ? null : body.logo,
          body.googlePlayUrl === '' ? null : body.googlePlayUrl,
          body.appStoreUrl === '' ? null : body.appStoreUrl,
          body.linkdin === '' ? null : body.linkdin,
          body.instgram === '' ? null : body.instgram,
          body.platformPolicy === '' ? null : body.platformPolicy,
          body.deliveryPolicy === '' ? null : body.deliveryPolicy,
          body.cancelationPolicy === '' ? null : body.cancelationPolicy,
          body.returnPolicy === '' ? null : body.returnPolicy,
          body.driverRegistrationPolicy === ''
            ? null
            : body.driverRegistrationPolicy,
          body.id === '' ? null : body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info, err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_appinformations_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.appinformations WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info, err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__categories Models__
  _GET_categories_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info, rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.categories WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.categories;';

    logMessage(Info, 'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info, err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_categories_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at=== "" ? null : body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.categories(parent_id,categories.order,name,slug,created_at,updated_at,description,image) VALUES(?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.parent_id === '' ? null : body.parent_id,
          body.order === '' ? null : body.order,
          body.name === '' ? null : body.name,
          body.slug === '' ? null : body.slug,
          body.created_at === '' ? null : body.created_at,
          body.updated_at === '' ? null : body.updated_at,
          body.description === '' ? null : body.description,
          body.image === '' ? null : body.image,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info, 'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_categories_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name=== "" ? null : body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.categories SET parent_id = ?, categories.order = ?, name = ?, slug = ?, created_at = ?, updated_at = ?, description = ?, image = ? WHERE id = ?;',
        [
          body.parent_id === '' ? null : body.parent_id,
          body.order === '' ? null : body.order,
          body.name === '' ? null : body.name,
          body.slug === '' ? null : body.slug,
          body.created_at === '' ? null : body.created_at,
          body.updated_at === '' ? null : body.updated_at,
          body.description === '' ? null : body.description,
          body.image === '' ? null : body.image,
          body.id === '' ? null : body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info, err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_categories_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.categories WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info, err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _CallProcedure_TEST_() {
    //__Test calling procedure__
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('CALL ProcedureName(?);', [Service_ID], function(err, result) {
        if (err) {
          logMessage(Info, err);
          resolve('Error');
        }

        logMessage(
          Info,
          'Result: ',
          JSON.stringify(result[0]) /* [0][1].email */,
        ); //when using procedures
        resolve(JSON.stringify(result[0]));
      });
    });
  }
}

let Model = new modelClass();
module.exports = Model;
