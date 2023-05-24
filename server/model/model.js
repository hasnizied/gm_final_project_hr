const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    EmployeeNumber : {
        type : String,
      
    },
    EmployeeName : {
        type : String,
        
    },
    Speciality : {
        type : String,
        
    },
    Cost_Center : {
        type : String,
      
    },
    Job : {
        type : String,
        
    },
    Basic_salary : {
        type : String,
        
    },
    Employee_Grade : {
        type : String,
        
    },
    Nationality : {
        type : String,
        
    },
    StartOf_Contract : {
        type : Date,
       
    },
    EndOf_Contract : {
        type : Date,
       
    },
    YearOfExperience : {
        type: String,
       
       
    },
    Address : {
        type: String,
       
    },
    PassportNo : {
        type: String,
       
    },

    
    email : {
        type: String,
       
    },
    Phone : {
        type: String,
        
    },
    EmployeePicture : {
        type : String,
        
    },
    EmployeeLinkedIn_profile : {
        type : String,
        
    },
    EmployeeGithub_profile : {
        type : String,
       
    },
    gender : String,
    status : String
})

const HRdb = mongoose.model('Employees', schema);

module.exports = HRdb;