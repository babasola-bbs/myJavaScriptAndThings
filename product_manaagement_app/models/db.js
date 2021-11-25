const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeesDB', {useNewUrlParser: true}, (err) =>
{if(!err){console.log('MongoDB Connection Success')}
else{console.log('Error In DB Connection')}});

require('./employee.model');