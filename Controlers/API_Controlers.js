//__importing my Model class__
const Model = require('../Models/BasicModel');

class Controlersclass {
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

  _Refresh_ServicesList(req, res) {
    let returnedData = {};

    Model._GET_REST_LOGIN_DATA_().then(result => {
      returnedData['ServicesList'] = result;
      console.log('132 ' + JSON.stringify(returnedData));
      res.send(returnedData);
    });
  }
}

let APIcontrolers = new Controlersclass();
module.exports = APIcontrolers;
