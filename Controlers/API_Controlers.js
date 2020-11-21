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
const PhpSaveLocation = process.env.PHP_DIR;
//__Path manipulation module__
const path = require('path');
//__File system access module__
const fs = require('fs');

//__Glob var for starting the procedure__
let flag = 0;
let errFlag = 0;

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

  _TestPhpRun_Read_(req, res) {
    let returnedData = {};

    exec(
      'heroku/php/bin/php ' + path.join(__dirname, '..', ExelSaveLocation) + "uploadFileRawData.php",
      (error, stdout, stderr) => {
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        returnedData['data'] = {};
        returnedData['data'].err = error;
        returnedData['data'].stderr = stderr;
        returnedData['data'].stdout = stdout;
        logMessage(Info, JSON.stringify(returnedData));
        res.send(200, returnedData); //  Return Res

        console.log('flag++ = ' + flag);
        if (error) {
          errFlag--;
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      },
    );
  
  }
  //__upload page Controllers__
  //__UploadCSV__
  _excelUpload_Post_(req, res) {
    if (!req.files) {
      return res.status(500).send({msg: 'file is not found'});
    }
    //__check if files not there__
    if (
      !req.files.csv &&
      (!req.files.textSheet || req.body.textSheetDate !== '') &&
      (!req.files.varSheet || req.body.varSheetDate !== '')
    )
      return res.status(500).send({msg: 'Not all data found'});
    else {
      let returnedData = {};
      returnedData['response_code'] = 0;
      returnedData['response_message'] = 'Success';
      logMessage(Info, JSON.stringify(returnedData));
      res.send(200, returnedData); //  Return Res
    }
    flag = 0;
    errFlag = 0;
    let fileNames = [];
    fileNames = ['TextResponseDataStructure_', 'VariablesAndDefinitionsTable_'];
    let currentDate = new Date().toISOString().slice(0, 10);
    console.log(Object.keys(req.files.csv));
    // accessing the file
    const myFile = req.files.csv; //  mv() method places the file inside public directory
    myFile.mv(
      `${path.join(__dirname, '..', ExelSaveLocation)}/DataStructure.csv`,
      function(err) {
        if (err) {
          console.log(err);
          return res.status(500).send({msg: 'Error occured'});
        }
        issuePhpCommand(0, fileNames[1] + currentDate);
        issuePhpCommand(3, fileNames[1] + currentDate);
        //__check file or history file for text sheet and var sheet__
        if (req.files.textSheet && req.files.varSheet) {
          //__Move files to wright places__
          moveRecievedFiles(
            req.files.textSheet,
            0,
            currentDate,
            issuePhpCommand,
          );
          moveRecievedFiles(
            req.files.varSheet,
            1,
            currentDate,
            issuePhpCommand,
          );
        } else if (req.files.textSheet && !req.files.varSheet) {
          moveRecievedFiles(
            req.files.textSheet,
            0,
            currentDate,
            issuePhpCommand,
          );
          issuePhpCommand(2, fileNames[1] + req.body.varSheetDate);
        } else if (!req.files.textSheet && req.files.varSheet) {
          issuePhpCommand(1, fileNames[0] + req.body.textSheetDate);
          moveRecievedFiles(
            req.files.varSheet,
            1,
            currentDate,
            issuePhpCommand,
          );
        } else if (!req.files.textSheet && !req.files.varSheet) {
          issuePhpCommand(1, fileNames[0] + req.body.textSheetDate);
          issuePhpCommand(2, fileNames[1] + req.body.varSheetDate);
        }
        let myInterval = setInterval(() => {
          if (flag === 4) {
            clearInterval(myInterval);
            if (errFlag < 0) {
              console.log('Error before procedure');
            } else {
              flag = 0;
              console.log('start procedurer..');
              //__run procedure__
              Model._start_data_processing_()
                .then(result => {
                  //  Check Error
                  if (result.errno) throw result.sqlMessage;

                  //__Run mailing script__
                })
                .catch(error => {
                  logMessage(logError, error);
                  // res.send(500, returnedData); //  Return Res
                });
            }
          }
        }, 1000);
        // returing the response with file path and name
        // return res.status(200).send({
        //   name: myFile.name,
        //   path: `${ExelSaveLocation}/${myFile.name}`,
        // });
      },
    );
  }

  //__UploadText__
  _excelTextUpload_Post_(req, res) {
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
      exec(
        'php ' + __dirname + '/' + ExelSaveLocation + 'file.php',
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
        },
      );
      // returing the response with file path and name
      return res
        .status(200)
        .send({name: myFile.name, path: `${ExelSaveLocation}/${myFile.name}`});
    });
  }

  //__UploadVariable__
  _excelVariableUpload_Post_(req, res) {
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
      exec(
        'php ' + __dirname + '/' + ExelSaveLocation + 'file.php',
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
        },
      );
      // returing the response with file path and name
      return res
        .status(200)
        .send({name: myFile.name, path: `${ExelSaveLocation}/${myFile.name}`});
    });
  }

  //__getHistoryUploaded__*
  __History_Uploaded_Files_Read_(req, res) {
    let returnedData = {}; // to construct response
    fs.readdir(path.join(__dirname, '..', ExelSaveLocation), (err, files) => {
      if (err) console.log(err);
      else {
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        // returnedData['data'] ;
        let fileResult = {};
        let temp = '';
        fileResult.ParagraphSheetHistoey = [];
        fileResult.VaribaleSheetHistoey = [];
        console.log('\nCurrent directory filenames:');
        files.forEach(file => {
          console.log(file);
          if (file.includes('TextResponseDataStructure')) {
            temp = file.replace('.csv', '');
            fileResult.ParagraphSheetHistoey.push(
              temp.replace('TextResponseDataStructure_', ''),
            );
          }
          if (file.includes('VariablesAndDefinitionsTable')) {
            temp = file.replace('.csv', '');
            fileResult.VaribaleSheetHistoey.push(
              temp.replace('VariablesAndDefinitionsTable_', ''),
            );
          }
        });
        Model._GET_casesCount_DATA_()
          .then(result => {
            //  Check Error
            if (result.errno) throw result.sqlMessage;

            //  Constructing Response
            returnedData['response_code'] = 0;
            returnedData['response_message'] = 'Success';
            fileResult['caseCount'] = result;
            returnedData['data'] = fileResult;
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
        // returnedData['data'] = result;
        // res.send(200, returnedData); //  Return Res
      }
    });
  }

  //__clearDatabase Controllers__
  _clearDatabase_Read_(req, res) {
    let returnedData = {}; // to construct response

    Model._GET_clearDatabase_DATA_()
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        // returnedData['data'] = result;
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

  //__clearAllMetadata Controllers__
  _clearAllMetadata_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    exec(
      'rm -r ' + path.join(__dirname, '..', PhpSaveLocation) + '/Reporting\\ Files/*',
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      },
    );
    Model._GET_clearDatabase_DATA_()
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        // returnedData['data'] = result;
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

  //__ExportAllData Controllers__
  _ExportAllData_Read_(req, res) {
    let returnedData = {}; // to construct response

    Model._GET_ExportAllData_DATA_()
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

  //__DataSheetFormat Controllers__
  _DataSheetFormat_Read_(req, res) {
    let returnedData = {}; // to construct response

    //__Select file location__
    let fileLocation =
      path.join(__dirname, '..', ExelSaveLocation) + '/DataStructure.csv';
    res.download(fileLocation);
    // returnedData['response_code'] = 0;
    // returnedData['response_message'] = 'Success';
    // returnedData['data'] = fileLocation;
    // res.send(200, returnedData); //  Return Res
  }

  //__ParagraphSheetFormat Controllers__
  _ParagraphSheetFormat_Read_(req, res) {
    //__Select file location__
    fs.readdir(path.join(__dirname, '..', ExelSaveLocation), (err, files) => {
      if (err) console.log(err);
      else {
        let temp = "";
        let newestFile = "";
        let newestFileDate;
        let dateArray = new Array();
        console.log('\nCurrent directory filenames:');
        files.forEach(file => {
          console.log(file);
          if (file.includes('TextResponseDataStructure')) {
            temp = file.replace('.csv', '');
            dateArray.push(
              new Date(temp.replace('TextResponseDataStructure_', '')).toISOString().slice(0, 10),
            );
          }
        });
        // console.log(dateArray);
        if(dateArray.length === 0){
          res(200);
        }
        if(dateArray.length === 1){
          newestFile = path.join(__dirname, '..', ExelSaveLocation) + '/TextResponseDataStructure_' + dateArray[0].toString() + '.csv';
          // console.log(newestFile)
        }
        if(dateArray.length > 1){
          newestFileDate = dateArray[0].toString();
          dateArray.forEach((element, index) => {
            if(newestFileDate < element)
              newestFileDate = element;
          });
          newestFile = path.join(__dirname, '..', ExelSaveLocation) + '/TextResponseDataStructure_' + newestFileDate.toString() + '.csv';
        }
        // console.log("before down")
        res.download(newestFile);
      }
    });
  }

  //__VariableSheetFormat Controllers__
  _VariableSheetFormat_Read_(req, res) {
    //__Select file location__
    fs.readdir(path.join(__dirname, '..', ExelSaveLocation), (err, files) => {
      if (err) console.log(err);
      else {
        let temp = "";
        let newestFile = "";
        let newestFileDate;
        let dateArray = new Array();
        console.log('\nCurrent directory filenames:');
        files.forEach(file => {
          // console.log(file);
          if (file.includes('VariablesAndDefinitionsTable')) {
            temp = file.replace('.csv', '');
            dateArray.push(
              new Date(temp.replace('VariablesAndDefinitionsTable_', '')).toISOString().slice(0, 10),
            );
          }
        });
        // console.log(dateArray);
        if(dateArray.length === 0){
          res(200);
        }
        if(dateArray.length === 1){
          newestFile = path.join(__dirname, '..', ExelSaveLocation) + '/VariablesAndDefinitionsTable_' + dateArray[0].toString() + '.csv';
          console.log(newestFile)
        }
        if(dateArray.length > 1){
          newestFileDate = dateArray[0].toString();
          dateArray.forEach((element, index) => {
            if(newestFileDate < element)
              newestFileDate = element;
          });
          newestFile = path.join(__dirname, '..', ExelSaveLocation) + '/VariablesAndDefinitionsTable_' + newestFileDate.toString() + '.csv';
        }
        // console.log("before down")
        res.download(newestFile);
      }
    });
  }

  //__Data View Page Controllers__

  //__getResults Controllers__
  _getResults_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_getResults_DATA_(rowID)
      .then(result => {
        //  Check Error
        if (result.errno) throw result.sqlMessage;

        //  Constructing Response
        returnedData['response_code'] = 0;
        returnedData['response_message'] = 'Success';
        returnedData['data'] = JSON.parse(result);
        // logMessage(Info, JSON.stringify(returnedData));
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

  //__getDataForSubSclae Controllers__
  _getDataForSubSclae_Read_(req, res) {
    let returnedData = {}; // to construct response
    let rowID = req.params.id; //  to Recieve table ID

    Model._GET_getDataForSubSclae_DATA_(rowID)
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

  //__getResults Controllers__
  // _getResults_Read_(req, res) {
  //   let returnedData = {}; // to construct response
  //   let rowID = req.params.id; //  to Recieve table ID

  //   Model._GET_getResults_DATA_(rowID)
  //     .then(result => {
  //       //  Check Error
  //       if (result.errno) throw result.sqlMessage;

  //       //  Constructing Response
  //       returnedData['response_code'] = 0;
  //       returnedData['response_message'] = 'Success';
  //       returnedData['data'] = result;
  //       logMessage(Info, JSON.stringify(returnedData));
  //       res.send(200, returnedData); //  Return Res
  //     })
  //     .catch(error => {
  //       //  Constructing Response
  //       returnedData['response_code'] = 10;
  //       returnedData['response_message'] = 'Error: DataBase Error';

  //       logMessage(logError, error);
  //       res.send(500, returnedData); //  Return Res
  //     });
  // }
}

let APIcontrollers = new Controllersclass();
module.exports = APIcontrollers;

//__Helper functions__
//__post php commands__
const issuePhpCommand = (scriptId, fileName, callback) => {
  let scripts = [];
  scripts = [
    'uploadFileCaseInformation.php ' + path.join(__dirname, '..', PhpSaveLocation) + '/Reporting Files/DataStructure.csv',
    'uploadFileVariables\\&Definitions.php ',
    'uploadFileTextResponses.php ',
    'uploadFileRawData.php ' + path.join(__dirname, '..', PhpSaveLocation) + '/Reporting Files/DataStructure.csv',
  ];
  if (scriptId === 1 || scriptId === 2) {
    scripts[scriptId] = scripts[scriptId]  + path.join(__dirname, '..', PhpSaveLocation) + '/Reporting Files/' + fileName + '.csv';
  }
  // Run php script
  console.log('Running Script...');
  console.log( 'php ' + path.join(__dirname, '..', PhpSaveLocation) + scripts[scriptId]);
  exec(
    'php ' + path.join(__dirname, '..', PhpSaveLocation) + scripts[scriptId],
    (error, stdout, stderr) => {
      flag++;
      console.log('flag++ = ' + flag);
      if (error) {
        errFlag--;
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    },
  );
};

//__move files__
const moveRecievedFiles = (file, fileId, date, callback) => {
  const myFile = file; //  mv() method places the file inside public directory
  let fileNames = [];
  fileNames = ['TextResponseDataStructure_', 'VariablesAndDefinitionsTable_'];

  myFile.mv(
    `${path.join(__dirname, '..', ExelSaveLocation)}/${fileNames[fileId] +
      date}.csv`,
    function(err) {
      if (err) {
        console.log(err);
        // return res.status(500).send({msg: 'Error occured'});
      }
      if (callback) callback(fileId + 1, fileNames[fileId] + date);
    },
  );
};

//__return excel sheet__
function returnExcel(res, ReportType) {
  //ORN_Report
  // console.log('Reultttt: ' + result);
  res.setHeader(
    'Content-disposition',
    'attachment; filename=' + ReportType + '.csv',
  );
  res.setHeader('content-type', 'application/octet-stream');

  var buffer = xlsx.build([{name: 'main', data: data}], options);
  res.send(buffer);
}
