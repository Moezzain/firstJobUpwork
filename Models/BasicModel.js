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
        logMessage(logError,'Error while connecting database :- ' + err);
      } else {
        logMessage(Info,'Data Base Connected!');
      }
    });
  }

  //__Appinformations Models__
  _GET_appinformations_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.appinformations WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.appinformations;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
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
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.appinformations(name,aboutUs,colorTheme,email,phone,whatsApp,facebook,minRequests,created_at,updated_at,twitter,privacyPolicy,userAgreement,whyUS,howItsWork,FAQ,logo,googlePlayUrl,appStoreUrl,linkdin,instgram,platformPolicy,deliveryPolicy,cancelationPolicy,returnPolicy,driverRegistrationPolicy) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.name,
          body.aboutUs,
          body.colorTheme,
          body.email,
          body.phone,
          body.whatsApp,
          body.facebook,
          body.minRequests,
          body.created_at,
          body.updated_at,
          body.twitter,
          body.privacyPolicy,
          body.userAgreement,
          body.whyUS,
          body.howItsWork,
          body.FAQ,
          body.logo,
          body.googlePlayUrl,
          body.appStoreUrl,
          body.linkdin,
          body.instgram,
          body.platformPolicy,
          body.deliveryPolicy,
          body.cancelationPolicy,
          body.returnPolicy,
          body.driverRegistrationPolicy,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_appinformations_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.appinformations SET name = ?, aboutUs = ?, colorTheme = ?, email = ? phone = ?, whatsApp = ?, facebook = ?, minRequests = ? created_at = ?, updated_at = ?, twitter = ?, privacyPolicy = ? userAgreement = ?, whyUS = ?, howItsWork = ?, FAQ = ? logo = ?, googlePlayUrl = ?, appStoreUrl = ?, linkdin = ? instgram = ?, platformPolicy = ?, deliveryPolicy = ?, cancelationPolicy = ? , returnPolicy = ?, driverRegistrationPolicy = ? WHERE id = ?;',
        [
          body.name,
          body.aboutUs,
          body.colorTheme,
          body.email,
          body.phone,
          body.whatsApp,
          body.facebook,
          body.minRequests,
          body.created_at,
          body.updated_at,
          body.twitter,
          body.privacyPolicy,
          body.userAgreement,
          body.whyUS,
          body.howItsWork,
          body.FAQ,
          body.logo,
          body.googlePlayUrl,
          body.appStoreUrl,
          body.linkdin,
          body.instgram,
          body.platformPolicy,
          body.deliveryPolicy,
          body.cancelationPolicy,
          body.returnPolicy,
          body.driverRegistrationPolicy,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
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
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__Cancellation_reasons Models__
  _GET_cancellation_reasons_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.cancellation_reasons WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.cancellation_reasons;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_cancellation_reasons_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.cancellation_reasons(created_at,updated_at, name, description) VALUES(?,?, ?, ?);',
        [body.created_at, body.updated_at, body.name, body.description],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_cancellation_reasons_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.cancellation_reasons SET created_at = ?, updated_at = ?, name = ?, description = ? WHERE id = ?;',
        [
          body.created_at,
          body.updated_at,
          body.name,
          body.description,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_cancellation_reasons_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.cancellation_reasons WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
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
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.categories WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.categories;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
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
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.categories(parent_id,order,name,slug,created_at,updated_at,description,image) VALUES(?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.parent_id,
          body.order,
          body.name,
          body.slug,
          body.created_at,
          body.updated_at,
          body.description,
          body.image,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
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
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.categories SET parent_id = ?, order = ?, name = ?, slug = ? created_at = ?, updated_at = ?, description = ?, image = ? WHERE id = ?;',
        [
          body.parent_id,
          body.order,
          body.name,
          body.slug,
          body.created_at,
          body.updated_at,
          body.description,
          body.image,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
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
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__cities Models__
  _GET_cities_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.cities WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.cities;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_cities_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.cities(name,created_at,updated_at,longitude,latitude) VALUES(?, ?, ?, ?, ?);',
        [
          body.name,
          body.created_at,
          body.updated_at,
          body.longitude,
          body.latitude,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_cities_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.cities SET name = ?, created_at = ?, updated_at = ?, longitude = ?, latitude = ? WHERE id = ?;',
        [
          body.name,
          body.created_at,
          body.updated_at,
          body.longitude,
          body.latitude,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_cities_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.cities WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__contact_us_forms Models__
  _GET_contact_us_forms_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.contact_us_forms WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.contact_us_forms;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_contact_us_forms_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.contact_us_forms(created_at,updated_at,customerName,feedbackTitle,feedbackBody,customerEmail,customerId,feedBackImg) VALUES(?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.created_at,
          body.updated_at,
          body.customerName,
          body.feedbackTitle,
          body.feedbackBody,
          body.customerEmail,
          body.customerId,
          body.feedBackImg,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_contact_us_forms_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.contact_us_forms SET created_at = ?, updated_at = ?, customerName = ?, feedbackTitle = ?, feedbackBody = ?, customerEmail = ?, customerId = ?, feedBackImg = ? WHERE id = ?;',
        [
          body.created_at,
          body.updated_at,
          body.customerName,
          body.feedbackTitle,
          body.feedbackBody,
          body.customerEmail,
          body.customerId,
          body.feedBackImg,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_contact_us_forms_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.contact_us_forms WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__customers Models__
  _GET_customers_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.customers WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.customers;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_customers_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.customers(image,login_phone,first_name,last_name,password,longtude,latitude,credit,subscription_date,subscription_package,email,customer_type,is_On,is_Active,created_at,updated_at,city,address,rate,count,FirebaseToken,licenceImage,CarImage,smscode,smsExpireDate,isVerified,medicalTestImg,insuranceImg,carOwnerAuthImg,frontPlateImg,backPlateImg,birthDay,idType,nationalIDImg,carLicenceImg,stcpay,ipan,deliveryCarType) VALUES(?,?, ?, ?);',
        [
          body.image,
          body.login_phone,
          body.first_name,
          body.last_name,
          body.password,
          body.longtude,
          body.latitude,
          body.credit,
          body.subscription_date,
          body.subscription_package,
          body.email,
          body.customer_type,
          body.is_On,
          body.is_Active,
          body.created_at,
          body.updated_at,
          body.city,
          body.address,
          body.rate,
          body.count,
          body.FirebaseToken,
          body.licenceImage,
          body.CarImage,
          body.smscode,
          body.smsExpireDate,
          body.isVerified,
          body.medicalTestImg,
          body.insuranceImg,
          body.carOwnerAuthImg,
          body.frontPlateImg,
          body.backPlateImg,
          body.birthDay,
          body.idType,
          body.nationalIDImg,
          body.carLicenceImg,
          body.stcpay,
          body.ipan,
          body.deliveryCarType,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_customers_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.customers SET image = ?,login_phone = ?,first_name = ?,last_name = ?,password = ?,longtude = ?,latitude = ?,credit = ?,subscription_date = ?,subscription_package = ?,email = ?,customer_type = ?,is_On = ?,is_Active = ?,created_at = ?,updated_at = ?,city = ?,address = ?,rate = ?,count = ?,FirebaseToken = ?,licenceImage = ?,CarImage = ?,smscode = ?,smsExpireDate = ?,isVerified = ?,medicalTestImg = ?,insuranceImg = ?,carOwnerAuthImg = ?,frontPlateImg = ?,backPlateImg = ?,birthDay = ?,idType = ?,nationalIDImg = ?,carLicenceImg = ?,stcpay = ?,ipan = ?,deliveryCarType = ? WHERE id = ?;',
        [
          body.image,
          body.login_phone,
          body.first_name,
          body.last_name,
          body.password,
          body.longtude,
          body.latitude,
          body.credit,
          body.subscription_date,
          body.subscription_package,
          body.email,
          body.customer_type,
          body.is_On,
          body.is_Active,
          body.created_at,
          body.updated_at,
          body.city,
          body.address,
          body.rate,
          body.count,
          body.FirebaseToken,
          body.licenceImage,
          body.CarImage,
          body.smscode,
          body.smsExpireDate,
          body.isVerified,
          body.medicalTestImg,
          body.insuranceImg,
          body.carOwnerAuthImg,
          body.frontPlateImg,
          body.backPlateImg,
          body.birthDay,
          body.idType,
          body.nationalIDImg,
          body.carLicenceImg,
          body.stcpay,
          body.ipan,
          body.deliveryCarType,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_customers_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.customers WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__customers_types Models__
  _GET_customers_types_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.customers_types WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.customers_types;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_customers_types_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.customers_types(name, slug, created_at, updated_at) VALUES(?,?, ?, ?);',
        [body.name, body.slug, body.created_at, body.updated_at],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_customers_types_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.customers_types SET created_at = ?, updated_at = ?, name = ?, description = ? WHERE id = ?;',
        [body.name, body.slug, body.created_at, body.updated_at, body.id],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_customers_types_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.customers_types WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__data_rows Models__
  _GET_data_rows_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.data_rows WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.data_rows;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_data_rows_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.data_rows(data_type_id,field,type,display_name,required,browse,read,edit,add,delete,details,order) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.data_type_id,
          body.field,
          body.type,
          body.display_name,
          body.required,
          body.browse,
          body.read,
          body.edit,
          body.add,
          body.delete,
          body.details,
          body.order,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_data_rows_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.data_rows SET data_type_id = ?,field = ?,type = ?,display_name = ?,required = ?,browse = ?,read = ?,edit = ?,add = ?,delete = ?,details = ?,order = ? WHERE id = ?;',
        [
          body.data_type_id,
          body.field,
          body.type,
          body.display_name,
          body.required,
          body.browse,
          body.read,
          body.edit,
          body.add,
          body.delete,
          body.details,
          body.order,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_data_rows_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.data_rows WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__data_types Models__
  _GET_data_types_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.data_types WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.data_types;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_data_types_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.data_types(name,slug,display_name_singular,display_name_plural,icon,model_name,policy_name,controller,description,generate_permissions,server_side,details,created_at,updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.name,
          body.slug,
          body.display_name_singular,
          body.display_name_plural,
          body.icon,
          body.model_name,
          body.policy_name,
          body.controller,
          body.description,
          body.generate_permissions,
          body.server_side,
          body.details,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_data_types_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.data_types SET name = ?,slug = ?,display_name_singular = ?,display_name_plural = ?,icon = ?,model_name = ?,policy_name = ?,controller = ?,description = ?,generate_permissions = ?,server_side = ?,details = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.name,
          body.slug,
          body.display_name_singular,
          body.display_name_plural,
          body.icon,
          body.model_name,
          body.policy_name,
          body.controller,
          body.description,
          body.generate_permissions,
          body.server_side,
          body.details,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_data_types_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.data_types WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__deliveries Models__
  _GET_deliveries_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.deliveries WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.deliveries;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_deliveries_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.deliveries(customer_id,driver_id,address,state,delivery_price,stage_started_at,order_id,start_latitude,start_longtude,end_latitude,end_longitude,created_at,updated_at,nearByShopName,nearByShopImg,nearbyorder,cancellation_reason) VALUES(?,?, ?, ?);',
        [
          body.customer_id,
          body.driver_id,
          body.address,
          body.state,
          body.delivery_price,
          body.stage_started_at,
          body.order_id,
          body.start_latitude,
          body.start_longtude,
          body.end_latitude,
          body.end_longitude,
          body.created_at,
          body.updated_at,
          body.nearByShopName,
          body.nearByShopImg,
          body.nearbyorder,
          body.cancellation_reason,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_deliveries_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.deliveries SET customer_id = ?,driver_id = ?,address = ?,state = ?,delivery_price = ?,stage_started_at = ?,order_id = ?,start_latitude = ?,start_longtude = ?,end_latitude = ?,end_longitude = ?,created_at = ?,updated_at = ?,nearByShopName = ?,nearByShopImg = ?,nearbyorder = ?,cancellation_reason = ? WHERE id = ?;',
        [
          body.customer_id,
          body.driver_id,
          body.address,
          body.state,
          body.delivery_price,
          body.stage_started_at,
          body.order_id,
          body.start_latitude,
          body.start_longtude,
          body.end_latitude,
          body.end_longitude,
          body.created_at,
          body.updated_at,
          body.nearByShopName,
          body.nearByShopImg,
          body.nearbyorder,
          body.cancellation_reason,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_deliveries_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.deliveries WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__delivery_car_types Models__
  _GET_delivery_car_types_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.delivery_car_types WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.delivery_car_types;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_delivery_car_types_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.delivery_car_types(created_at,updated_at, name, slang, description) VALUES(?, ?, ?, ?, ?);',
        [
          body.created_at,
          body.updated_at,
          body.name,
          body.slang,
          body.description,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_delivery_car_types_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.delivery_car_types SET created_at = ?, updated_at = ?, name = ?, slang = ?, description = ? WHERE id = ?;',
        [
          body.created_at,
          body.updated_at,
          body.name,
          body.slang,
          body.description,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_delivery_car_types_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.delivery_car_types WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__delivery_drivers_offers Models__
  _GET_delivery_drivers_offers_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.delivery_drivers_offers WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.delivery_drivers_offers;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_delivery_drivers_offers_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.delivery_drivers_offers(created_at,updated_at,deliveryId,driverID,price,time) VALUES(?, ?, ?, ?, ?, ?);',
        [
          body.created_at,
          body.updated_at,
          body.deliveryId,
          body.driverID,
          body.price,
          body.time,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_delivery_drivers_offers_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.delivery_drivers_offers SET created_at = ?, updated_at = ?, driverID = ?, price = ?, time = ? WHERE id = ?;',
        [
          body.created_at,
          body.updated_at,
          body.deliveryId,
          body.driverID,
          body.price,
          body.time,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_delivery_drivers_offers_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.delivery_drivers_offers WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__delivery_states Models__
  _GET_delivery_states_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.delivery_states WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.delivery_states;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_delivery_states_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.delivery_states(name,slug,started_at,end_at,created_at,updated_at) VALUES(?, ?, ?, ?, ?, ?);',
        [
          body.name,
          body.slug,
          body.started_at,
          body.end_at,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_delivery_states_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.delivery_states SET name = ?,slug = ?,started_at = ?,end_at = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.name,
          body.slug,
          body.started_at,
          body.end_at,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_delivery_states_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.delivery_states WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__faqs Models__
  _GET_faqs_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.faqs WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.faqs;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_faqs_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.faqs(question,answer,created_at,updated_at) VALUES(?,?, ?, ?);',
        [body.question, body.answer, body.created_at, body.updated_at],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_faqs_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.faqs SET question = ?,answer = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [body.question, body.answer, body.created_at, body.updated_at, body.id],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_faqs_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.faqs WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__jobs Models__
  _GET_jobs_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.jobs WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.jobs;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_jobs_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.jobs(queue,payload,attempts,reserved_at,available_at,created_at) VALUES(?, ?, ?, ?, ?, ?);',
        [
          body.queue,
          body.payload,
          body.attempts,
          body.reserved_at,
          body.available_at,
          body.created_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_jobs_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.jobs SET queue = ?,payload = ?,attempts = ?,reserved_at = ?,available_at = ?,created_at = ? WHERE id = ?;',
        [
          body.queue,
          body.payload,
          body.attempts,
          body.reserved_at,
          body.available_at,
          body.created_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_jobs_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.jobs WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__menu_items Models__
  _GET_menu_items_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.menu_items WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.menu_items;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_menu_items_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.menu_items(menu_id,title,url,target,icon_class,color,parent_id,order,created_at,updated_at,route,parameters) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.menu_id,
          body.title,
          body.url,
          body.target,
          body.icon_class,
          body.color,
          body.parent_id,
          body.order,
          body.created_at,
          body.updated_at,
          body.route,
          body.parameters,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_menu_items_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.menu_items SET menu_id = ?,title = ?,url = ?,target = ?,icon_class = ?,color = ?,parent_id = ?,order = ?,created_at = ?,updated_at = ?,route = ?,parameters = ? WHERE id = ?;',
        [
          body.menu_id,
          body.title,
          body.url,
          body.target,
          body.icon_class,
          body.color,
          body.parent_id,
          body.order,
          body.created_at,
          body.updated_at,
          body.route,
          body.parameters,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_menu_items_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.menu_items WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__menus Models__
  _GET_menus_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.menus WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.menus;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_menus_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.menus(name,created_at,updated_at) VALUES(?, ?, ?);',
        [body.name, body.created_at, body.updated_at],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_menus_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.menus SET name = ?, created_at = ?, updated_at = ? WHERE id = ?;',
        [body.name, body.created_at, body.updated_at],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_menus_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.menus WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__migrations Models__
  _GET_migrations_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.migrations WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.migrations;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_migrations_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.migrations(migration,batch) VALUES(?, ?);',
        [body.migration, body.batch],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_migrations_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.migrations SET migration = ?, batch = ? WHERE id = ?;',
        [body.migration, body.batch],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_migrations_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.migrations WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__notifications Models__
  _GET_notifications_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.notifications WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.notifications;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_notifications_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.notifications(user_id,title,body,image,created_at,updated_at) VALUES(?, ?, ?, ?, ?, ?);',
        [
          body.user_id,
          body.title,
          body.body,
          body.image,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_notifications_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.notifications SET user_id = ?,title = ?,body = ?,image = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.user_id,
          body.title,
          body.body,
          body.image,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_notifications_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.notifications WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__order_states Models__
  _GET_order_states_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.order_states WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.order_states;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_order_states_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.order_states(name,slug,created_at,updated_at,start_at,end_at) VALUES(?, ?, ?, ?, ?, ?);',
        [
          body.name,
          body.slug,
          body.created_at,
          body.updated_at,
          body.start_at,
          body.end_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_order_states_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.order_states SET name = ?,slug = ?,created_at = ?,updated_at = ?,start_at = ?,end_at = ? WHERE id = ?;',
        [
          body.name,
          body.slug,
          body.created_at,
          body.updated_at,
          body.start_at,
          body.end_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_order_states_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.order_states WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__orderdealer Models__
  _GET_orderdealer_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.orderdealer WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.orderdealer;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_orderdealer_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query('INSERT INTO ahlanwshlan.orderdealer() VALUES();', function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,'error: ' + err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        resolve(JSON.stringify('Success'));
      });
    });
  }

  _PUT_orderdealer_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query('UPDATE ahlanwshlan.orderdealer SET WHERE id = ?;', function(
        err,
        result,
      ) {
        // logMessage(Info,'Resultall: ' + JSON.stringify(result));
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
        resolve(JSON.stringify('Success'));
      });
    });
  }

  _DELETE_orderdealer_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.orderdealer WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__orders Models__
  _GET_orders_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.orders WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.orders;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_orders_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.orders(total_value,customer,shop,created_at,updated_at,state,note,city,time,cancellation_reason,paymentMethod) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.total_value,
          body.customer,
          body.shop,
          body.created_at,
          body.updated_at,
          body.state,
          body.note,
          body.city,
          body.time,
          body.cancellation_reason,
          body.paymentMethod,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_orders_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.orders SET total_value = ?,customer = ?,shop = ?,created_at = ?,updated_at = ?,state = ?,note = ?,city = ?,time = ?,cancellation_reason = ?,paymentMethod = ? WHERE id = ?;',
        [
          body.total_value,
          body.customer,
          body.shop,
          body.created_at,
          body.updated_at,
          body.state,
          body.note,
          body.city,
          body.time,
          body.cancellation_reason,
          body.paymentMethod,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_orders_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.orders WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__orders_shops Models__
  _GET_orders_shops_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.orders_shops WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.orders_shops;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_orders_shops_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.orders_shops(created_at,updated_at,orderId,shopId) VALUES(?,?, ?, ?);',
        [body.created_at, body.updated_at, body.orderId, body.shopId],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_orders_shops_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.orders_shops SET created_at = ?, updated_at = ?, orderId = ?, shopId = ? WHERE id = ?;',
        [body.created_at, body.updated_at, body.orderId, body.shopId, body.id],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_orders_shops_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.orders_shops WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__ordersprpductlists Models__
  _GET_ordersprpductlists_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.ordersprpductlists WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.ordersprpductlists;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_ordersprpductlists_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.ordersprpductlists(Orders_id,Products_id,product_name,price,quantity,total,created_at,updated_at,deleted_at,Shopname) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.Orders_id,
          body.Products_id,
          body.product_name,
          body.price,
          body.quantity,
          body.total,
          body.created_at,
          body.updated_at,
          body.deleted_at,
          body.Shopname,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_ordersprpductlists_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.ordersprpductlists SET Orders_id = ?,Products_id = ?,product_name = ?,price = ?,quantity = ?,total = ?,created_at = ?,updated_at = ?,deleted_at = ?,Shopname = ? WHERE id = ?;',
        [
          body.Orders_id,
          body.Products_id,
          body.product_name,
          body.price,
          body.quantity,
          body.total,
          body.created_at,
          body.updated_at,
          body.deleted_at,
          body.Shopname,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_ordersprpductlists_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.ordersprpductlists WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__pages Models__
  _GET_pages_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.pages WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.pages;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_pages_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.pages(author_id,title,excerpt,body,image,slug,meta_description,meta_keywords,status,created_at,updated_at) VALUES(?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?);',
        [
          body.author_id,
          body.title,
          body.excerpt,
          body.body,
          body.image,
          body.slug,
          body.meta_description,
          body.meta_keywords,
          body.status,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_pages_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.pages SET author_id = ?,title = ?,excerpt = ?,body = ?,image = ?,slug = ?,meta_description = ?,meta_keywords = ?,status = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.author_id,
          body.title,
          body.excerpt,
          body.body,
          body.image,
          body.slug,
          body.meta_description,
          body.meta_keywords,
          body.status,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_pages_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.pages WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__password_resets Models__
  _GET_password_resets_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.password_resets WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.password_resets;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_password_resets_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.password_resets(email,token,created_at) VALUES(?, ?, ?);',
        [body.email, body.token, body.created_at],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_password_resets_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.password_resets SET email = ?, token = ?, created_at = ? WHERE email = ?;',
        [body.email, body.token, body.created_at, body.OldEmail],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_password_resets_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.password_resets WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__permission_role Models__
  _GET_permission_role_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.permission_role WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.permission_role;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_permission_role_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.permission_role(permission_id,role_id) VALUES(?, ?);',
        [body.permission_id, body.role_id],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_permission_role_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.permission_role SET permission_id = ?,role_id = ? WHERE permission_id = ?;',
        [body.permission_id, body.role_id, body.permission_id],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_permission_role_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.permission_role WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__permissions Models__
  _GET_permissions_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.permissions WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.permissions;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_permissions_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.permissions(key,table_name,created_at,updated_at) VALUES(?,?, ?, ?);',
        [body.key, body.table_name, body.created_at, body.updated_at],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_permissions_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.permissions SET key = ?,table_name = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [body.key, body.table_name, body.created_at, body.updated_at, body.id],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_permissions_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.permissions WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__posts Models__
  _GET_posts_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.posts WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.posts;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_posts_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.posts(author_id,category_id,title,seo_title,excerpt,body,image,slug,meta_description,meta_keywords,status,featured,created_at,updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.author_id,
          body.category_id,
          body.title,
          body.seo_title,
          body.excerpt,
          body.body,
          body.image,
          body.slug,
          body.meta_description,
          body.meta_keywords,
          body.status,
          body.featured,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_posts_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.posts SET author_id = ?,category_id = ?,title = ?,seo_title = ?,excerpt = ?,body = ?,image = ?,slug = ?,meta_description = ?,meta_keywords = ?,status = ?,featured = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.author_id,
          body.category_id,
          body.title,
          body.seo_title,
          body.excerpt,
          body.body,
          body.image,
          body.slug,
          body.meta_description,
          body.meta_keywords,
          body.status,
          body.featured,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_posts_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.posts WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__productcomments Models__
  _GET_productcomments_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.productcomments WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.productcomments;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_productcomments_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.productcomments(product_Id,Customer_id,comment,created_at,updated_at,shop_id) VALUES(?, ?, ?, ?, ?, ?);',
        [
          body.product_Id,
          body.Customer_id,
          body.comment,
          body.created_at,
          body.updated_at,
          body.shop_id,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_productcomments_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.productcomments SET product_Id = ?,Customer_id = ?,comment = ?,created_at = ?,updated_at = ?,shop_id = ? WHERE id = ?;',
        [
          body.product_Id,
          body.Customer_id,
          body.comment,
          body.created_at,
          body.updated_at,
          body.shop_id,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_productcomments_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.productcomments WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__products Models__
  _GET_products_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.products WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.products;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_products_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.products(name,categories,image,price,shop,created_at,updated_at,description,stock,unit,sold_count,rate,raters_count,weight) VALUES(?,?, ?, ?);',
        [
          body.name,
          body.categories,
          body.image,
          body.price,
          body.shop,
          body.created_at,
          body.updated_at,
          body.description,
          body.stock,
          body.unit,
          body.sold_count,
          body.rate,
          body.raters_count,
          body.weight,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_products_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.products SET body.name = ?,categories = ?,image = ?,price = ?,shop = ?,created_at = ?,updated_at = ?,description = ?,stock = ?,unit = ?,sold_count = ?,rate = ?,raters_count = ?,weight = ? WHERE id = ?;',
        [
          body.name,
          body.categories,
          body.image,
          body.price,
          body.shop,
          body.created_at,
          body.updated_at,
          body.description,
          body.stock,
          body.unit,
          body.sold_count,
          body.rate,
          body.raters_count,
          body.weight,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_products_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.products WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__productstemplets Models__
  _GET_productstemplets_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.productstemplets WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.productstemplets;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_productstemplets_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.productstemplets(name,categories,image,price,description,unit,created_at,updated_at) VALUES(?, ?, ?, ?, ? ,?, ?, ?);',
        [
          body.name,
          body.categories,
          body.image,
          body.price,
          body.description,
          body.unit,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_productstemplets_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.productstemplets SET name = ?,categories = ?,image = ?,price = ?,description = ?,unit = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.name,
          body.categories,
          body.image,
          body.price,
          body.description,
          body.unit,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_productstemplets_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.productstemplets WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__roles Models__
  _GET_roles_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.roles WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.roles;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_roles_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.roles(name,display_name,created_at,updated_at) VALUES(?,?, ?, ?);',
        [body.name, body.display_name, body.created_at, body.updated_at],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_roles_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.roles SET name = ?,display_name = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.name,
          body.display_name,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_roles_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.roles WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__schedule Models__
  _GET_schedule_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.schedule WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.schedule;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_schedule_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.schedule(a,bc,c) VALUES(?, ?, ?);',
        [body.a, body.bc, body.c],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_schedule_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.schedule SET a = ?, bc = ?, c = ? WHERE id = ?;',
        [body.a, body.bc, body.c, body.id],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_schedule_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.schedule WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__settings Models__
  _GET_settings_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.settings WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.settings;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_settings_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.settings(key,display_name,value,details,type,order,group) VALUES(?, ?, ?, ?, ?, ?, ?);',
        [
          body.key,
          body.display_name,
          body.value,
          body.details,
          body.type,
          body.order,
          body.group,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_settings_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.settings SET key = ?,display_name = ?,value = ?,details = ?,type = ?,order = ?,group = ? WHERE id = ?;',
        [
          body.key,
          body.display_name,
          body.value,
          body.details,
          body.type,
          body.order,
          body.group,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_settings_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.settings WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__shops Models__
  _GET_shops_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.shops WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.shops;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_shops_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.shops(name,image,description,Phone,email,website,dealer_id,address,longitude,Latitude,created_at,updated_at,city,is_On,rate,raters_count,sold_count,user_distances,Credit,shopSerialNumber) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.name,
          body.image,
          body.description,
          body.Phone,
          body.email,
          body.website,
          body.dealer_id,
          body.address,
          body.longitude,
          body.Latitude,
          body.created_at,
          body.updated_at,
          body.city,
          body.is_On,
          body.rate,
          body.raters_count,
          body.sold_count,
          body.user_distances,
          body.Credit,
          body.shopSerialNumber,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_shops_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.shops SET body.name = ?,body.image = ?,body.description = ?,body.Phone = ?,body.email = ?,body.website = ?,body.dealer_id = ?,body.address = ?,body.longitude = ?,body.Latitude = ?,body.created_at = ?,body.updated_at = ?,body.city = ?,body.is_On = ?,body.rate = ?,body.raters_count = ?,body.sold_count = ?,body.user_distances = ?,body.Credit = ?,body.shopSerialNumber = ? WHERE id = ?;',
        [
          body.name,
          body.image,
          body.description,
          body.Phone,
          body.email,
          body.website,
          body.dealer_id,
          body.address,
          body.longitude,
          body.Latitude,
          body.created_at,
          body.updated_at,
          body.city,
          body.is_On,
          body.rate,
          body.raters_count,
          body.sold_count,
          body.user_distances,
          body.Credit,
          body.shopSerialNumber,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_shops_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.shops WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__special_offers Models__
  _GET_special_offers_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.special_offers WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.special_offers;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_special_offers_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.special_offers(image,shop_id,description,title,created_at,updated_at) VALUES(?,?, ?, ?, ?, ?);',
        [
          body.image,
          body.shop_id,
          body.description,
          body.title,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_special_offers_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.special_offers SET image = ?,shop_id = ?,description = ?,title = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.image,
          body.shop_id,
          body.description,
          body.title,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_special_offers_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.special_offers WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__subscription_packages Models__
  _GET_subscription_packages_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.subscription_packages WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.subscription_packages;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_subscription_packages_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.subscription_packages(name,slug,created_at,updated_at,price,cycle) VALUES(?, ?, ?, ?, ?, ?);',
        [body.created_at, body.updated_at, body.name, body.description],
        [
          body.name,
          body.slug,
          body.created_at,
          body.updated_at,
          body.price,
          body.cycle,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_subscription_packages_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.subscription_packages SET name = ?,slug = ?,created_at = ?,updated_at = ?,price = ?,cycle = ? WHERE id = ?;',
        [
          body.name,
          body.slug,
          body.created_at,
          body.updated_at,
          body.price,
          body.cycle,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_subscription_packages_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.subscription_packages WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__summaries Models__
  _GET_summaries_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.summaries WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.summaries;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_summaries_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.summaries(total_credit,deliveries_credit,shops_credit,shops_number,drivers_number,customers_number,created_at,updated_at) VALUES(?, ?, ?, ?, ?, ?, ? ,?);',
        [
          body.total_credit,
          body.deliveries_credit,
          body.shops_credit,
          body.shops_number,
          body.drivers_number,
          body.customers_number,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_summaries_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.summaries SET total_credit = ?,deliveries_credit = ?,shops_credit = ?,shops_number = ?,drivers_number = ?,customers_number = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.total_credit,
          body.deliveries_credit,
          body.shops_credit,
          body.shops_number,
          body.drivers_number,
          body.customers_number,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_summaries_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.summaries WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__transactions Models__
  _GET_transactions_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.transactions WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.transactions;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_transactions_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.transactions(note,created_at,updated_at,merchantPhone,customerGivenName,customerPhone,cartItemName,amount,currency,paymentCuse,hayperPayId,state,customerId,driverId,merchantId,errors,message,billImage) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.note,
          body.created_at,
          body.updated_at,
          body.merchantPhone,
          body.customerGivenName,
          body.customerPhone,
          body.cartItemName,
          body.amount,
          body.currency,
          body.paymentCuse,
          body.hayperPayId,
          body.state,
          body.customerId,
          body.driverId,
          body.merchantId,
          body.errors,
          body.message,
          billbody.Image,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_transactions_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.transactions SET note = ?,created_at = ?,updated_at = ?,merchantPhone = ?,customerGivenName = ?,customerPhone = ?,cartItemName = ?,amount = ?,currency = ?,paymentCuse = ?,hayperPayId = ?,state = ?,customerId = ?,driverId = ?,merchantId = ?,errors = ?,message = ?,billImage = ? WHERE id = ?;',
        [
          body.note,
          body.created_at,
          body.updated_at,
          body.merchantPhone,
          body.customerGivenName,
          body.customerPhone,
          body.cartItemName,
          body.amount,
          body.currency,
          body.paymentCuse,
          body.hayperPayId,
          body.state,
          body.customerId,
          body.driverId,
          body.merchantId,
          body.errors,
          body.message,
          billbody.Image,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_transactions_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.transactions WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__translations Models__
  _GET_translations_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.translations WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.translations;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_translations_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.translations(table_name,column_name,foreign_key,locale,value,created_at,updated_at) VALUES(?,?, ?, ?, ?,?, ?);',
        [
          body.table_name,
          body.column_name,
          body.foreign_key,
          body.locale,
          body.value,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_translations_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.translations SET table_name = ?,column_name = ?,foreign_key = ?,locale = ?,value = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.table_name,
          body.column_name,
          body.foreign_key,
          body.locale,
          body.value,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_translations_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.translations WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__units Models__
  _GET_units_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.units WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.units;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_units_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.units(created_at,updated_at,name,slag,image,order) VALUES(?, ?, ?, ?, ?, ?);',
        [body.created_at, body.updated_at, body.name, body.description],
        [
          body.created_at,
          body.updated_at,
          body.name,
          body.slag,
          body.image,
          body.order,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_units_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.units SET created_at = ?,updated_at = ?,name = ?,slag = ?,image = ?,order = ? WHERE id = ?;',
        [
          body.created_at,
          body.updated_at,
          body.name,
          body.slag,
          body.image,
          body.order,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_units_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.units WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  //__user_product_favs Models__
  _GET_user_product_favs_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.user_product_favs WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.user_product_favs;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_user_product_favs_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.user_product_favs(created_at,updated_at,userID,proudctID) VALUES(?, ?, ?, ?);',
        [body.created_at, body.updated_at, body.userID, body.proudctID],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_user_product_favs_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.user_product_favs SET created_at = ?,updated_at = ?,userID = ?,proudctID = ? WHERE id = ?;',
        [
          body.created_at,
          body.updated_at,
          body.userID,
          body.proudctID,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_user_product_favs_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.user_product_favs WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__user_roles Models__
  _GET_user_roles_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.user_roles WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.user_roles;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_user_roles_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.user_roles(user_id,role_id) VALUES(?, ?);',
        [body.user_id, body.role_id],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_user_roles_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.user_roles SET user_id = ?, role_id = ? WHERE user_id = ?;',
        [body.user_id, body.role_id, body.user_id],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_user_roles_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query(
        'DELETE FROM ahlanwshlan.user_roles WHERE id = ?;',
        rowID,
        function(err, result) {
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  //__users Models__
  _GET_users_DATA_(rowID) {
    var DB = this.dbConn;
    logMessage(Info,rowID);
    let qr = rowID
      ? 'SELECT * FROM ahlanwshlan.users WHERE id = ?;'
      : 'SELECT * FROM ahlanwshlan.users;';

    logMessage(Info,'qr ' + qr);
    return new Promise(function(resolve, reject) {
      DB.query(qr, [rowID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
        if (rowID) resolve(JSON.stringify(result[0]));
        //When id Specified
        else resolve(JSON.stringify(result));
      });
    });
  }

  _POST_users_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'toString(body.created_at: ' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
      DB.query(
        'INSERT INTO ahlanwshlan.users(role_id,name,email,avatar,email_verified_at,password,remember_token,settings,created_at,updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [
          body.role_id,
          body.name,
          body.email,
          body.avatar,
          body.email_verified_at,
          body.password,
          body.remember_token,
          body.settings,
          body.created_at,
          body.updated_at,
        ],
        function(err, result) {
          if (err) {
            logMessage(Info,'error: ' + err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _PUT_users_DATA_(body) {
    var DB = this.dbConn;
    // logMessage(Info,'@' + JSON.stringify(body) + 'name = ' + body.name);
    return new Promise(function(resolve, reject) {
      DB.query(
        'UPDATE ahlanwshlan.users SET role_id = ?,name = ?,email = ?,avatar = ?,email_verified_at = ?,password = ?,remember_token = ?,settings = ?,created_at = ?,updated_at = ? WHERE id = ?;',
        [
          body.role_id,
          body.name,
          body.email,
          body.avatar,
          body.email_verified_at,
          body.password,
          body.remember_token,
          body.settings,
          body.created_at,
          body.updated_at,
          body.id,
        ],
        function(err, result) {
          // logMessage(Info,'Resultall: ' + JSON.stringify(result));
          if (err) {
            logMessage(Info,err);
            resolve(err);
          }

          // logMessage(Info,'Result: ', result[0] /* [1].email */); //when using procedures
          resolve(JSON.stringify('Success'));
        },
      );
    });
  }

  _DELETE_users_DATA_(rowID) {
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('DELETE FROM ahlanwshlan.users WHERE id = ?;', rowID, function(
        err,
        result,
      ) {
        if (err) {
          logMessage(Info,err);
          resolve(err);
        }

        resolve(JSON.stringify('Success'));
      });
    });
  }

  _CallProcedure_TEST_() {
    //__Test calling procedure__
    var DB = this.dbConn;
    return new Promise(function(resolve, reject) {
      DB.query('CALL ProcedureName(?);', [Service_ID], function(err, result) {
        if (err) {
          logMessage(Info,err);
          resolve('Error');
        }

        logMessage(Info,'Result: ', JSON.stringify(result[0]) /* [0][1].email */); //when using procedures
        resolve(JSON.stringify(result[0]));
      });
    });
  }
}

let Model = new modelClass();
module.exports = Model;
