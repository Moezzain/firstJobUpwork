//__importing my Model class__
const Model = require('../Models/BasicModel');
//__Logger__
const {logMessage, Info, logError} = require('../Services/loggingService');

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
}

let APIcontrollers = new Controllersclass();
module.exports = APIcontrollers;
