var HRdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const Employee = new HRdb({
        EmployeeNumber  : req.body.EmployeeNumber,
        EmployeeName   : req.body.EmployeeName,
        Speciality  : req.body.Speciality,
        Cost_Center  : req.body.Cost_Center,
        Job  : req.body.Job,
        Basic_salary  : req.body.Basic_salary,
        Employee_Grade  : req.body.Employee_Grade,
        Nationality : req.body.Nationality,
        StartOf_Contract : req.body.StartOf_Contract,
        EndOf_Contract  : req.body.EndOf_Contract,
        YearOfExperience  : req.body.YearOfExperience,
        Address  : req.body.Address,
        PassportNo  : req.body.PassportNo,
        email  : req.body.email,
        Phone  : req.body.Phone,
         EmployeeLinkedIn_profile  : req.body.EmployeeLinkedIn_profile,
        EmployeeGithub_profile  : req.body.EmployeeGithub_profile,
        gender  : req.body.gender,
        status  : req.body.status
    })

    // save user in the database
    Employee
        .save(Employee)
        .then(data => {
            //res.send(data)
            res.redirect('/add-Employee');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        HRdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        HRdb.find()
            .then(Employee => {
                res.send(Employee)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    HRdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    HRdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Employee was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}