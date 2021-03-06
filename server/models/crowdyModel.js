var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    id:  String,
    value: Number
});

var Employee = mongoose.model("CrowdyEmployee", employeeSchema);
module.exports.Employee = Employee;

var publicSchema = new Schema({
    id:  String,
    num_reports: Number,
    sum: Number,
    avg: Number,
    last_update: Date
});

publicSchema.pre('save', function(next){
    if(this.num_reports == 0){
        this.avg = 0;
    } else {
        this.avg = this.sum / this.num_reports;
    }
    this.last_update = new Date();
    next();
});

var Public = mongoose.model("CrowdyPublic", publicSchema);
module.exports.Public = Public;