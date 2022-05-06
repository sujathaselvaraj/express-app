const fs = require('fs');

// STEP 1: Load JSON file
const users = require('./patient.json');
// const users = require('./patientQuery');
let user = {
  first_name: "Aaa",
        aadhar: 578657,
        birth_date: "2022-05-04",
        city_name: "Tuticorin",
        dateOfTest: "2022-05-04",
        timeOfTest: "10:14",
        Result: "Negative",
        labName: "Zzzz",
        reportNo: 131243,
        Gender: "Female"
}

// Defining new user
// let user = {
//   name: 'Eeee',
//   age: 30,
//   blood_group: 'A1B+ve',
//   gender: 'Female',
//   diseases: 'Diarrhea'
// };
// STEP 2: Adding new data to users object
//users.push(user);
// STEP 3: Writing to a file
fs.writeFile('patient.json', JSON.stringify(users), (err) => {
    // Checking for errors
    if (err) throw err;
  
    console.log('Done writing'); // Success
  });