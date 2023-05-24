const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3001/api/Employees')
        .then(function(response){
            res.render('index', { Employees : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_Employee = (req, res) =>{
    res.render('add_Employee');
}

exports.update_Employee = (req, res) =>{
    axios.get('mongodb://localhost:3001/api/Employees', { params : { id : req.query.id }})
        .then(function(Employeedata){
            res.render("update_Employee", { Employee : Employeedata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}