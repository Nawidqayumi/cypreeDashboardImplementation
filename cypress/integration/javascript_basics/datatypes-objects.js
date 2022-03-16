

var name = 'Nawid'
var age = 28
var name_object = {firstName: "Nawid", lastName:"Qayumi"}
var truth = true
var sheets = ['HTML', 'CSS']
var a = null


var students = {
    firstName : "Nawid",
    lastName : "Qayumi",
    age : 28,
    height : 183,

    fullName : function(){
        return this.firstName + " " + this.lastName
    }
}

const ageValue = students.age

console.log(ageValue);
console.log(students.fullName());