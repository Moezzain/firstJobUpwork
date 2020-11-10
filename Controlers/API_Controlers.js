//__importing my Model class__
const Model = require('../Models/BasicModel');
//__Mailer__
const sendEmail = require('../Services/nodeMailerConf');
//__Exec Command__
const {exec} = require('child_process');
//__Logger__
const {logMessage, Info, logError} = require('../Services/loggingService');
//__Xcel File location where php will be used__
const ExelSaveLocation = process.env.EXCEL_SAVE_DIR;

class Controllersclass {
  //__calss constructor where all the variables are creat it and init__
  constructor() {}

  //__Login check__
  _checkLoginCredentials_(req, res) {
    // res.send(403, 'unauthoraized');  //  Return Res
    logMessage(Info, JSON.stringify(req.body));
    Model._GET_ACCOUNT_PASSWD_(req.body).then(result => {
      res.send(result); //  Return Res
    });
  }

  //__Appinformations Controllers__
  _appinformations_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_appinformations_DATA_(rowID)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        returnedData['data'] = result;
        logMessage(Info, JSON.stringify(returnedData));
        res.send(200, returnedData); //  Return Res
      })
      .catch(error => {
        //  Constructing Response
        returnedData['response_code'] = 10;
        returnedData['response_message'] = 'Error: DataBase Error';

        logMessage(logError, error);
        logMessage(logError, error);
        res.send(500, returnedData); //  Return Res
      });
  }

  _appinformations_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_appinformations_DATA_(req.body)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        logMessage(Info, JSON.stringify(returnedData));
        res.send(201, returnedData); //  Return Res
      })
      .catch(error => {
        //  Constructing Response
        returnedData['response_code'] = 10;
        returnedData['response_message'] = 'Error: DataBase Error';

        logMessage(logError, error);
        res.send(500, returnedData); //  Return Res
      });
  }

  _appinformations_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_appinformations_DATA_(req.body)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        logMessage(Info, JSON.stringify(returnedData));
        res.send(200, returnedData); //  Return Res
      })
      .catch(error => {
        //  Constructing Response
        returnedData['response_code'] = 10;
        returnedData['response_message'] = 'Error: DataBase Error';

        logMessage(logError, error);
        res.send(500, returnedData); //  Return Res
      });
  }

  _appinformations_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_appinformations_DATA_(rowID)
        .then(result => {
          //  Check Error
          if (result.errno) throw result.sqlMessage;

          //  Constructing Response
          returnedData['response_code'] = 0;
          returnedData['response_message'] = 'Success';
          logMessage(Info, JSON.stringify(returnedData));
          res.send(200, returnedData); //  Return Res
        })
        .catch(error => {
          //  Constructing Response
          returnedData['response_code'] = 10;
          returnedData['response_message'] = 'Error: DataBase Error';

          logMessage(logError, error);
          res.send(500, returnedData); //  Return Res
        });
  }

  //__Categories Controllers__
  _categories_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_categories_DATA_(rowID)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        returnedData['data'] = result;
        logMessage(Info, JSON.stringify(returnedData));
        res.send(200, returnedData); //  Return Res
      })
      .catch(error => {
        //  Constructing Response
        returnedData['response_code'] = 10;
        returnedData['response_message'] = 'Error: DataBase Error';

        logMessage(logError, error);
        res.send(500, returnedData); //  Return Res
      });
  }

  _categories_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_categories_DATA_(req.body)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        logMessage(Info, JSON.stringify(returnedData));
        res.send(201, returnedData); //  Return Res
      })
      .catch(error => {
        //  Constructing Response
        returnedData['response_code'] = 10;
        returnedData['response_message'] = 'Error: DataBase Error';

        logMessage(logError, error);
        res.send(500, returnedData); //  Return Res
      });
  }

  _categories_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_categories_DATA_(req.body)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        logMessage(Info, JSON.stringify(returnedData));
        res.send(200, returnedData); //  Return Res
      })
      .catch(error => {
        //  Constructing Response
        returnedData['response_code'] = 10;
        returnedData['response_message'] = 'Error: DataBase Error';

        logMessage(logError, error);
        res.send(500, returnedData); //  Return Res
      });
  }

  _categories_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_categories_DATA_(rowID)
        .then(result => {
          //  Check Error
          if (result.errno) throw result.sqlMessage;

          //  Constructing Response
          returnedData['response_code'] = 0;
          returnedData['response_message'] = 'Success';
          logMessage(Info, JSON.stringify(returnedData));
          res.send(200, returnedData); //  Return Res
        })
        .catch(error => {
          //  Constructing Response
          returnedData['response_code'] = 10;
          returnedData['response_message'] = 'Error: DataBase Error';

          logMessage(logError, error);
          res.send(500, returnedData); //  Return Res
        });
  }

  _excelUpload_Post_(req, res) {
    if (!req.files) {
      return res.status(500).send({msg: 'file is not found'});
    }

    console.log(JSON.stringify(req.files));
    // accessing the file
    const myFile = req.files.file; //  mv() method places the file inside public directory
    myFile.mv(`${ExelSaveLocation}/${myFile.name}`, function(err) {
      if (err) {
        console.log(err);
        return res.status(500).send({msg: 'Error occured'});
      }
      // Run php script
      console.log('Running Script...');
      exec('php ' + __dirname + '/' + ExelSaveLocation + 'file.php', (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
      // returing the response with file path and name
      return res.status(200).send({name: myFile.name, path: `${ExelSaveLocation}/${myFile.name}`});
    });
  }
}

let APIcontrollers = new Controllersclass();
module.exports = APIcontrollers;
