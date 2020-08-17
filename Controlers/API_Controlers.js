//__importing my Model class__
const Model = require('../Models/BasicModel');

class Controllersclass {
  //__calss constructor where all the variables are creat it and init__
  constructor() {}

  //__Login check__
  _checkLoginCredentials_(req, res) {
    // res.send(403, 'unauthoraized');
    console.log(JSON.stringify(req.body));
    Model._GET_ACCOUNT_PASSWD_(req.body).then(result => {
      res.send(result);
    });
  }

  //__Cancellation_reasons Controllers__
  _cancellation_reasons_Read_(req, res) {
    let returnedData = {};
    let rowID = req.params.id;

    Model._GET_cancellation_reasons_DATA_(rowID)
      .then(result => {
        if (result.errno) throw result.sqlMessage;

        returnedData['cancellation_reasons'] = result;
        console.log(JSON.stringify(returnedData));
        res.send(200, returnedData);
      })
      .catch(error => {
        returnedData['Error'] = error;
        res.send(500, returnedData);
      });
  }

  _cancellation_reasons_Creat_(req, res) {
    let returnedData = {};

    Model._POST_cancellation_reasons_DATA_(req.body)
      .then(result => {
        if (result.errno) throw result.sqlMessage;

        returnedData['Response_Code'] = 0;
        returnedData['Response_Message'] = 'Success';
        console.log(JSON.stringify(returnedData));
        res.send(201, returnedData);
      })
      .catch(error => {
        returnedData['Response_Code'] = -1;
        returnedData['Response_Message'] = error;

        res.send(500, returnedData);
      });
  }

  _cancellation_reasons_Update_(req, res) {
    let returnedData = {};

    Model._PUT_cancellation_reasons_DATA_(req.body)
      .then(result => {
        if (result.errno) throw result.sqlMessage;

        returnedData['Response_Code'] = 0;
        returnedData['Response_Message'] = 'Success';
        console.log(JSON.stringify(returnedData));
        res.send(returnedData);
      })
      .catch(error => {
        returnedData['Response_Code'] = -1;
        returnedData['Response_Message'] = error;

        res.send(500, returnedData);
      });
  }

  _cancellation_reasons_Delete_(req, res) {
    let returnedData = {};
    let rowID = req.params.id;

    Model._DELETE_cancellation_reasons_DATA_(rowID)
      .then(result => {
        if (result.errno) throw result.sqlMessage;

        returnedData['Response_Code'] = 0;
        returnedData['Response_Message'] = 'Success';
        console.log(JSON.stringify(returnedData));
        res.send(returnedData);
      })
      .catch(error => {
        returnedData['Response_Code'] = -1;
        returnedData['Response_Message'] = error;

        res.send(500, returnedData);
      });
  }
}

let APIcontrollers = new Controllersclass();
module.exports = APIcontrollers;
