'use strict';

let Ghazi = new Employee ("1000", "Ghazi Samer", "Administration", "Senior");
let Lana = new Employee ("1001", "Lana Ali", "Finance", "Senior");
let Tamara = new Employee ("1002", "Tamara Ayoub", "Marketing", "Senior");
let Safi = new Employee ("1003", "Safi Walid", "Administration", "Mid-Senior");
let Omar = new Employee ("1004", "Omar Zaid", "Development", "Senior");
let Rana = new Employee ("1005", "Rana Saleh", "Development", "Junior");
let Hadi = new Employee ("1006", "Hadi Ahmad", "Finance", "Mid-Senior");

function Employee (employeeID, fullName, department, level, image, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image
}

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }


Employee.prototype.salary = function (min, max) {
    let salaryBeforeTax = Math.floor(Math.random() * (max - min) ) + min;
    // console.log (min);
    // console.log (max);
    // console.log(salaryBeforeTax);
return salaryBeforeTax*(1-0.075)
}

// function employeeLevel() {
//     console.log(Omar.level);
// }
// employeeLevel(Omar);

function levelSalary(Employee) {

    switch (Employee.level) {
        case "Senior":
        return [1500, 2000]
        break;
        case "Mid-Senior":
        return [1000, 1500]
        break;
        default :
        return [500, 1000] 
            break;
    }
    }
    // console.log(Omar.level);
    // console.log(levelSalary(Omar));

    // Omar.salary(1500 ,2000);
// console.log(Hadi.salary(...levelSalary(Hadi)));
// console.log(Omar.salary(...levelSalary(Omar)));

Employee.prototype.render = function () {
    document.write(`<h3> ${this.fullName} </h3>`)
    document.write(`<h3> ${this.level} </h3>`)
    document.write(`<h4> ${this.salary(...levelSalary(this))} </h4><br>`)
}

Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();
