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

  //__Cancellation_reasons Controllers__
  _cancellation_reasons_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_cancellation_reasons_DATA_(rowID)
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

  _cancellation_reasons_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_cancellation_reasons_DATA_(req.body)
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

  _cancellation_reasons_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_cancellation_reasons_DATA_(req.body)
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

  _cancellation_reasons_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_cancellation_reasons_DATA_(rowID)
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

  //__Cities Controllers__
  _cities_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_cities_DATA_(rowID)
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

  _cities_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_cities_DATA_(req.body)
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

  _cities_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_cities_DATA_(req.body)
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

  _cities_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_cities_DATA_(rowID)
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

  //__contact_us_forms Controllers__
  _contact_us_forms_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_contact_us_forms_DATA_(rowID)
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

  _contact_us_forms_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_contact_us_forms_DATA_(req.body)
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

  _contact_us_forms_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_contact_us_forms_DATA_(req.body)
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

  _contact_us_forms_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_contact_us_forms_DATA_(rowID)
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

  //__Customers Controllers__
  _customers_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_customers_DATA_(rowID)
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

  _customers_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_customers_DATA_(req.body)
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

  _customers_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_customers_DATA_(req.body)
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

  _customers_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_customers_DATA_(rowID)
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

  //__Customers_types Controllers__
  _customers_types_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_customers_types_DATA_(rowID)
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

  _customers_types_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_customers_types_DATA_(req.body)
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

  _customers_types_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_customers_types_DATA_(req.body)
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

  _customers_types_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_customers_types_DATA_(rowID)
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

  //__Data_rows Controllers__
  _data_rows_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_data_rows_DATA_(rowID)
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

  _data_rows_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_data_rows_DATA_(req.body)
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

  _data_rows_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_data_rows_DATA_(req.body)
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

  _data_rows_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_data_rows_DATA_(rowID)
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

  //__Data_types Controllers__
  _data_types_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_data_types_DATA_(rowID)
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

  _data_types_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_data_types_DATA_(req.body)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        // logMessage(Info,JSON.stringify(returnedData));
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

  _data_types_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_data_types_DATA_(req.body)
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

  _data_types_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_data_types_DATA_(rowID)
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

  //__Deliveries Controllers__
  _deliveries_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_deliveries_DATA_(rowID)
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

  _deliveries_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_deliveries_DATA_(req.body)
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

  _deliveries_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_deliveries_DATA_(req.body)
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

  _deliveries_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_deliveries_DATA_(rowID)
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

  //__Delivery_car_types Controllers__
  _delivery_car_types_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_delivery_car_types_DATA_(rowID)
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

  _delivery_car_types_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_delivery_car_types_DATA_(req.body)
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

  _delivery_car_types_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_delivery_car_types_DATA_(req.body)
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

  _delivery_car_types_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_delivery_car_types_DATA_(rowID)
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

  //__Delivery_drivers_offers Controllers__
  _delivery_drivers_offers_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_delivery_drivers_offers_DATA_(rowID)
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

  _delivery_drivers_offers_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_delivery_drivers_offers_DATA_(req.body)
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

  _delivery_drivers_offers_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_delivery_drivers_offers_DATA_(req.body)
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

  _delivery_drivers_offers_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_delivery_drivers_offers_DATA_(rowID)
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

  //__Delivery_states Controllers__
  _delivery_states_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_delivery_states_DATA_(rowID)
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

  _delivery_states_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_delivery_states_DATA_(req.body)
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

  _delivery_states_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_delivery_states_DATA_(req.body)
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

  _delivery_states_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_delivery_states_DATA_(rowID)
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

  //__Faqs Controllers__
  _faqs_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_faqs_DATA_(rowID)
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

  _faqs_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_faqs_DATA_(req.body)
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

  _faqs_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_faqs_DATA_(req.body)
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

  _faqs_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_faqs_DATA_(rowID)
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

  //__Jobs Controllers__
  _jobs_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_jobs_DATA_(rowID)
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

  _jobs_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_jobs_DATA_(req.body)
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

  _jobs_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_jobs_DATA_(req.body)
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

  _jobs_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_jobs_DATA_(rowID)
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

  //__Menu_items Controllers__
  _menu_items_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_menu_items_DATA_(rowID)
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

  _menu_items_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_menu_items_DATA_(req.body)
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

  _menu_items_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_menu_items_DATA_(req.body)
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

  _menu_items_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_menu_items_DATA_(rowID)
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

  //__Menus Controllers__
  _menus_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_menus_DATA_(rowID)
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

  _menus_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_menus_DATA_(req.body)
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

  _menus_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_menus_DATA_(req.body)
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

  _menus_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_menus_DATA_(rowID)
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

  //__Migrations Controllers__
  _migrations_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_migrations_DATA_(rowID)
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

  _migrations_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_migrations_DATA_(req.body)
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

  _migrations_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_migrations_DATA_(req.body)
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

  _migrations_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_migrations_DATA_(rowID)
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

  //__Notifications Controllers__
  _notifications_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_notifications_DATA_(rowID)
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

  _notifications_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_notifications_DATA_(req.body)
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

  _notifications_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_notifications_DATA_(req.body)
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

  _notifications_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_notifications_DATA_(rowID)
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

  //__Order_states Controllers__
  _order_states_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_order_states_DATA_(rowID)
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

  _order_states_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_order_states_DATA_(req.body)
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

  _order_states_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_order_states_DATA_(req.body)
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

  _order_states_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_order_states_DATA_(rowID)
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

  //__orderdealer Controllers__
  _orderdealer_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_orderdealer_DATA_(rowID)
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

  _orderdealer_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_orderdealer_DATA_(req.body)
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

  _orderdealer_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_orderdealer_DATA_(req.body)
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

  _orderdealer_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_orderdealer_DATA_(rowID)
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

  //__Orders Controllers__
  _orders_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_orders_DATA_(rowID)
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

  _orders_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_orders_DATA_(req.body)
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

  _orders_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_orders_DATA_(req.body)
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

  _orders_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_orders_DATA_(rowID)
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

  //__Orders_shops Controllers__
  _orders_shops_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_orders_shops_DATA_(rowID)
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

  _orders_shops_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_orders_shops_DATA_(req.body)
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

  _orders_shops_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_orders_shops_DATA_(req.body)
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

  _orders_shops_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_orders_shops_DATA_(rowID)
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

  //__Ordersprpductlists Controllers__
  _ordersprpductlists_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_ordersprpductlists_DATA_(rowID)
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

  _ordersprpductlists_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_ordersprpductlists_DATA_(req.body)
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

  _ordersprpductlists_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_ordersprpductlists_DATA_(req.body)
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

  _ordersprpductlists_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_ordersprpductlists_DATA_(rowID)
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

  //__Pages Controllers__
  _pages_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_pages_DATA_(rowID)
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

  _pages_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_pages_DATA_(req.body)
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

  _pages_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_pages_DATA_(req.body)
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

  _pages_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_pages_DATA_(rowID)
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

  //__Password_resets Controllers__
  _password_resets_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_password_resets_DATA_(rowID)
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

  _password_resets_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_password_resets_DATA_(req.body)
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

  _password_resets_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_password_resets_DATA_(req.body)
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

  _password_resets_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_password_resets_DATA_(rowID)
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

  //__Permission_role Controllers__
  _permission_role_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_permission_role_DATA_(rowID)
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

  _permission_role_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_permission_role_DATA_(req.body)
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

  _permission_role_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_permission_role_DATA_(req.body)
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

  _permission_role_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_permission_role_DATA_(rowID)
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

  //__Permissions Controllers__
  _permissions_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_permissions_DATA_(rowID)
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

  _permissions_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_permissions_DATA_(req.body)
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

  _permissions_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_permissions_DATA_(req.body)
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

  _permissions_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_permissions_DATA_(rowID)
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

  //__Posts Controllers__
  _posts_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_posts_DATA_(rowID)
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

  _posts_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_posts_DATA_(req.body)
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

  _posts_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_posts_DATA_(req.body)
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

  _posts_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_posts_DATA_(rowID)
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

  //__Productcomments Controllers__
  _productcomments_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_productcomments_DATA_(rowID)
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

  _productcomments_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_productcomments_DATA_(req.body)
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

  _productcomments_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_productcomments_DATA_(req.body)
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

  _productcomments_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_productcomments_DATA_(rowID)
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

  //__Products Controllers__
  _products_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_products_DATA_(rowID)
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

  _products_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_products_DATA_(req.body)
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

  _products_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_products_DATA_(req.body)
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

  _products_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_products_DATA_(rowID)
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

  //__Productstemplets Controllers__
  _productstemplets_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_productstemplets_DATA_(rowID)
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

  _productstemplets_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_productstemplets_DATA_(req.body)
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

  _productstemplets_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_productstemplets_DATA_(req.body)
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

  _productstemplets_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_productstemplets_DATA_(rowID)
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

  //__Roles Controllers__
  _roles_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_roles_DATA_(rowID)
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

  _roles_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_roles_DATA_(req.body)
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

  _roles_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_roles_DATA_(req.body)
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

  _roles_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_roles_DATA_(rowID)
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

  //__Schedule Controllers__
  _schedule_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_schedule_DATA_(rowID)
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

  _schedule_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_schedule_DATA_(req.body)
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

  _schedule_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_schedule_DATA_(req.body)
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

  _schedule_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_schedule_DATA_(rowID)
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

  //__Settings Controllers__
  _settings_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_settings_DATA_(rowID)
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

  _settings_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_settings_DATA_(req.body)
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

  _settings_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_settings_DATA_(req.body)
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

  _settings_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_settings_DATA_(rowID)
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

  //__Shops Controllers__
  _shops_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_shops_DATA_(rowID)
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

  _shops_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_shops_DATA_(req.body)
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

  _shops_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_shops_DATA_(req.body)
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

  _shops_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_shops_DATA_(rowID)
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

  //__Special_offers Controllers__
  _special_offers_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_special_offers_DATA_(rowID)
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

  _special_offers_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_special_offers_DATA_(req.body)
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

  _special_offers_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_special_offers_DATA_(req.body)
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

  _special_offers_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_special_offers_DATA_(rowID)
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

  //__Subscription_packages Controllers__
  _subscription_packages_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_subscription_packages_DATA_(rowID)
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

  _subscription_packages_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_subscription_packages_DATA_(req.body)
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

  _subscription_packages_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_subscription_packages_DATA_(req.body)
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

  _subscription_packages_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_subscription_packages_DATA_(rowID)
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

  //__Summaries Controllers__
  _summaries_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_summaries_DATA_(rowID)
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

  _summaries_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_summaries_DATA_(req.body)
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

  _summaries_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_summaries_DATA_(req.body)
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

  _summaries_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_summaries_DATA_(rowID)
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

  //__Transactions Controllers__
  _transactions_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_transactions_DATA_(rowID)
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

  _transactions_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_transactions_DATA_(req.body)
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

  _transactions_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_transactions_DATA_(req.body)
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

  _transactions_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_transactions_DATA_(rowID)
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

  //__Translations Controllers__
  _translations_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_translations_DATA_(rowID)
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

  _translations_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_translations_DATA_(req.body)
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

  _translations_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_translations_DATA_(req.body)
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

  _translations_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_translations_DATA_(rowID)
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

  //__Units Controllers__
  _units_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_units_DATA_(rowID)
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

  _units_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_units_DATA_(req.body)
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

  _units_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_units_DATA_(req.body)
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

  _units_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_units_DATA_(rowID)
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

  //__User_product_favs Controllers__
  _user_product_favs_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_user_product_favs_DATA_(rowID)
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

  _user_product_favs_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_user_product_favs_DATA_(req.body)
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

  _user_product_favs_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_user_product_favs_DATA_(req.body)
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

  _user_product_favs_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_user_product_favs_DATA_(rowID)
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

  //__User_roles Controllers__
  _user_roles_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_user_roles_DATA_(rowID)
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

  _user_roles_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_user_roles_DATA_(req.body)
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

  _user_roles_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_user_roles_DATA_(req.body)
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

  _user_roles_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_user_roles_DATA_(rowID)
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

  //__Users Controllers__
  _users_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_users_DATA_(rowID)
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

  _users_Creat_(req, res) {
    let returnedData = {}; // to construct response

    Model._POST_users_DATA_(req.body)
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

  _users_Update_(req, res) {
    let returnedData = {}; // to construct response

    Model._PUT_users_DATA_(req.body)
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

  _users_Delete_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    if (!rowID) {
      //  Invalid ID Handeler
      returnedData['response_code'] = 11;
      returnedData['response_message'] = 'Error: Invalid id';

      logMessage(logError, 'Delete Req Err:Invalid id');
      res.send(500, returnedData); //  Return Res
    } else
      Model._DELETE_users_DATA_(rowID)
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
