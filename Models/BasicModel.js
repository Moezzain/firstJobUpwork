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
      // port: process.env.DB_PORT,
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

  _GET_casesCount_DATA_() {
    var DB = this.dbConn;
    // logMessage(Info, rowID);
    let qr = 'select count(id) from case_information;';

    logMessage(Info, 'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, function(err, result) {
        if (err) {
          logMessage(Info, err);
          resolve(err);
        }

        logMessage(
          Info,
          'Result: ' + JSON.stringify(result[0]) /* [1].email */,
        ); //when using procedures
        resolve(JSON.stringify(result[0]['count(id)']));
        //When id Specified
        // else resolve(JSON.stringify(result));
      });
    });
  }

  _GET_clearDatabase_DATA_() {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'truncate aggregation; truncate case_processed_dimension; truncate case_information; truncate case_paragraph; truncate case_paragraph_discrete; truncate case_text_response; truncate case_processed_item; truncate data_raw; truncate scale_and_labels; truncate text_response_values; truncate strength_avg_weak_response;',
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

  _GET_ExportAllData_DATA_() {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        "(SELECT 'item','aggregation') UNION (SELECT * FROM aggregation INTO OUTFILE '\\ExportAggregation.csv' FIELDS ENCLOSED BY '' TERMINATED BY ';' ESCAPED BY '' LINES TERMINATED BY '\\r\\n'); (SELECT 'id','token','date','email','name','job','rating_supervisors','rating_subordinates','rating_peers','url') UNION (SELECT * FROM case_information INTO OUTFILE '\\ExportCasesInformation.csv' FIELDS ENCLOSED BY '' TERMINATED BY ';' ESCAPED BY '' LINES TERMINATED BY '\\r\\n'); SELECT 'caseid','subscale','SelfParagraph','SuperiorParagraph','SubordinateParagraph','PeerParagraph','AggregateParagraph') UNION (SELECT * FROM case_paragraph INTO OUTFILE '\\ExportCasesParagraphs.csv' FIELDS ENCLOSED BY '' TERMINATED BY ';' ESCAPED BY '' LINES TERMINATED BY '\\r\\n'); (SELECT 'caseid','label','dimension','self_rating','superior_rating','subordinate_rating','peer_rating','avg_rating','aggregation','avg_self','avg_superior','avg_subordinate','avg_peer','avg_aggregate') UNION (SELECT * FROM case_dimensions INTO OUTFILE '\\ExportCasesDimensions.csv' FIELDS ENCLOSED BY '' TERMINATED BY ';' ESCAPED BY '' LINES TERMINATED BY '\\r\\n'); (SELECT 'id','caseid','scale','subscale','item','self_rating','superior_rating','subordinate_rating','peer_rating','avg_rating','aggregation','avg_self','avg_superior','avg_subordinate','avg_peer','avg_aggregate') UNION (SELECT * FROM data_processed INTO OUTFILE '\\ExportCasesItems.csv' FIELDS ENCLOSED BY '' TERMINATED BY ';' ESCAPED BY '' LINES TERMINATED BY '\\r\\n');",
        function(err, result) {
          if (err) {
            logMessage(logError, err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _GET_getResults_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info, rowID);
    let qr =
      'select label.label label, raw.avgeval_rating avg_rating, agg.avgeval_mean aggregation, 0 min, (select MAX(avgeval_rating) from data_raw) max from data_raw raw join aggregation agg on agg.item = raw.item join scale_and_labels label on label.scale = raw.item where raw.case_id = (select id from case_information where url=?); select scale, label from scale_and_labels; select raw.item dimension, raw.avgeval_rating Average, raw.self_rating Self, raw.superior_rating Superiors, raw.subordinate_rating Subordinates, raw.peer_rating Peers, agg.avgeval_mean Aggregation, (raw.superior_rating + raw.superior_sd_rating) superior_sd_max, (raw.superior_rating - raw.superior_sd_rating) superior_sd_min, (raw.subordinate_rating + raw.subordinate_sd_rating) subordinate_sd_max, (raw.subordinate_rating - raw.subordinate_sd_rating) subordinate_sd_min, (raw.peer_rating + raw.peer_sd_rating) peer_sd_max, (raw.peer_rating - raw.peer_sd_rating) peer_sd_min, (agg.avgeval_mean + raw.avgeval_sd_rating) avgeval_sd_max, (agg.avgeval_mean - raw.avgeval_sd_rating) avgeval_sd_min from data_raw raw join aggregation agg on agg.item = raw.item join scale_and_labels label on label.scale = raw.item where raw.case_id = (select id from case_information where url=?); select subscale, AggregateParagraph, SelfParagraph, SuperiorParagraph, SubordinateParagraph, PeerParagraph, CoachingParagraph from case_paragraph where caseid = (select id from case_information where url=?); select case_info.date, raw.case_id "case_dim.caseid", raw.item "case_dim.dimension", raw.avgeval_rating Average from data_raw raw join case_information case_info on case_info.id = raw.case_id join scale_and_labels label on label.scale = raw.item where raw.case_id in (select id from case_information where user_id = (select user_id from case_information where url=?) and token = (select token from case_information where url=?)) ORDER BY raw.item, case_info.date, raw.case_id; select type, label from strength_avg_weak_response where caseid = (select id from case_information where url=?) order by type;';

    // logMessage(Info, 'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID, rowID, rowID, rowID, rowID, rowID], function(err, result) {
        if (err) {
          logMessage(Info, err);
          resolve(err);
        }
        let ret = {};
        ret['radarChartData'] = [];
        console.log(result[0]);
        result[0].forEach((element, index) => {
          ret['radarChartData'][index] = {};
          ret['radarChartData'][index] = element;
        });
        // console.log("res " + JSON.stringify(ret["radarChartData"]));

        ret['labelsAndScales'] = [];
        // console.log(result);
        result[1].forEach((element, index) => {
          ret['labelsAndScales'][index] = {};
          ret['labelsAndScales'][index] = element;
        });
        console.log("result[2] " + JSON.stringify(result[2]));
        // console.log("result[1] " + JSON.stringify(result[1]));
        // console.log("result[0] " + JSON.stringify(result[0]));

        ret['dataForEachDimenstion'] = {};

        result[2].forEach((element, index) => {
          ret['dataForEachDimenstion'][element.dimension] = {};
          ret['dataForEachDimenstion'][element.dimension] = element;
        });
        // console.log("result[4] " + JSON.stringify(result[4]));

        ret['paragraphsForEachDimenstion'] = {};
        ret['progressDataForEachDimenstion'] = {};

        result[3].forEach((element, index) => {
          // console.log("element.subscale " + element.subscale);
          ret['paragraphsForEachDimenstion'][element.subscale] = {};
          ret['paragraphsForEachDimenstion'][element.subscale] = element;
        });
        // console.log("progressDataForEachDimenstion " + JSON.stringify(ret["progressDataForEachDimenstion"]));

        ret['progressDataForEachDimenstion']['dates'] = [];
        console.log("result[4] " + JSON.stringify(result[4]));
        result[4].forEach((element, index) => {
          if ('Democratic_Inc_Lead' === element.dimension)
            ret['progressDataForEachDimenstion']['dates'].push(element.date);

          if (!ret['progressDataForEachDimenstion'][element.dimension])
            ret['progressDataForEachDimenstion'][element.dimension] = [];
          ret['progressDataForEachDimenstion'][element.dimension].push(
            element.Average,
          );
        });
        // console.log("progressDataForEachDimenstion " + JSON.stringify(ret["progressDataForEachDimenstion"]));

        ret['strength_avg_weak_response'] = {};
        ret['strength_avg_weak_response']['Average Standing'] = [];
        ret['strength_avg_weak_response'].Strengths = [];
        ret['strength_avg_weak_response'].Weaknesses = [];
        result[5].forEach((element, index) => {
          ret['strength_avg_weak_response'][element.type].push(element.label);
        });

        resolve(JSON.stringify(ret));
        // ret[""] = result[];
        //__Supposed to be multiple results result[0] for query 1, 2, etc..
        // result[0].
        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        // if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        // else resolve(JSON.stringify(result));
      });
    });
  }

  _start_data_processing_() {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('CALL data_process;', function(err, result) {
        if (err) {
          logMessage(Info, err);
          resolve(err);
        }
        console.log('procedure ended');
        resolve(JSON.stringify('Success'));
      });
    });
  }
}

let Model = new modelClass();
module.exports = Model;
