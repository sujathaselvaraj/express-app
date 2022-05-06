const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const port = 9000;
const users = require('./patient.json');
var urlParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.get('/', function (request, response) {
    response.sendFile(`${__dirname}/patient.html`);
  });
  app.post('/patientQuery', urlParser, function (request, response) {
    var personName = request.body.personName;
    var aadharNumber = request.body.aadharNumber;
    var dob = request.body.dob;
    var cities = request.body.cities;
    var dateOftest = request.body.dateOftest;
    var timeOftest = request.body.timeOftest;
    var result = request.body.result;
    var dateOftest = request.body.dateOftest;
    var labname = request.body.labname;
    var reportno = request.body.reportno;
    var gender = request.body.gender;
    console.log(`${personName} ${aadharNumber} ${dob} ${cities} ${dateOftest} ${timeOftest} ${result} ${labname} ${reportno} ${gender}`);
    let data = {
      first_name: personName,
      aadhar: aadharNumber,
      birth_date: dob,
      city_name: cities,
      dateOfTest: dateOftest,
      timeOfTest: timeOftest,
      Result: result,
      labName: labname,
      reportNo: reportno,
      Gender: gender,
    };
    //users.push(data);
    fs.writeFile('patient.json', JSON.stringify(data), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log('Done writing'); // Success
});
  //response.end(JSON.stringify(data));
  });
const patient = require('./patient.json');
console.log(patient);
  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });
//   users.push(data);
// fs.writeFile('patient.json', JSON.stringify(data), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log('Done writing'); // Success
// });
 