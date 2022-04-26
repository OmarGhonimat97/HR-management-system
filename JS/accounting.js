'use strict';

// import {Ghazi,Lana,Tamara,Safi,Omar,Rana,Hadi} from './home';
// import {Employee, levelSalary, handleSubmit, saveData, getData} from './home';

let employeeArr = [];

let Ghazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let Lana = new Employee("1001", "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let Tamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let Safi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let Omar = new Employee("1004", "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let Rana = new Employee("1005", "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let Hadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");

function Employee(employeeID, fullName, department, level, image, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;

    employeeArr.push(this);
}

Employee.prototype.salary = function (min, max) {
    let salaryBeforeTax = Math.floor(Math.random() * (max - min)) + min;
    return salaryBeforeTax * (1 - 0.075)
}

function levelSalary(Employee) {

    switch (Employee.level) {
        case "Senior":
            return [1500, 2000]
            break;
        case "Mid-Senior":
            return [1000, 1500]
            break;
        default:
            return [500, 1000]
            break;
    }
}

Employee.prototype.render = function () {
    // document.write('<img src="assets/Ghazi.jpg">')
    let card = document.getElementById('card')
    let title = document.createElement('h3');
    title.textContent = "card";
    card.appendChild(title);

    let image = document.createElement('img');
    image.setAttribute("src", `${this.image}`)
    card.appendChild(image);
    image.style.width = "100px";

    let name = document.createElement('h3');
    name.textContent = `${this.fullName}`;
    card.appendChild(name);

    let ID = document.createElement('h3');
    ID.textContent = `${this.employeeID}`;
    card.appendChild(ID);

    let department = document.createElement('h3');
    department.textContent = `${this.department}`;
    card.appendChild(department);

    let level = document.createElement('h3');
    level.textContent = `${this.level}`;
    card.appendChild(level);

    let salary = document.createElement('h3');
    salary.textContent = `${this.salary(...levelSalary(this))}`;
    card.appendChild(salary);

    let br = document.createElement("span");
    br.innerHTML = "<br/>";
    card.appendChild(br);
}

/////////////////////////////////////// Accounting 
function listDepartments () {
    return 
}

// function emplyeesNumber(employeeArr) {
//     let developmentNum = 0;
//     let marketingNum = 0;
//     let financeNum = 0;
//     let administrationNum = 0;

    // for (let i = 0; i < employeeArr.length; i++) {
    //   if (employeeArr.department == "Development") {
    //     developmentNum++;
    //   } else if (employeeArr.department == "Marketing") {
    //     marketingNum++;
    //   } else if (employeeArr.department == "Finance") {
    //     financeNum++;
    //   } else if (employeeArr.department == "Administration") {
    //     administrationNum++;
    //   }
    
//     console.log(developmentNum);
//     console.log(marketingNum);
//     console.log(financeNum);
//     console.log(administrationNum);
// }
// }

Employee.prototype.emplyeesNumber = function (employeeArr) {
    let developmentNum = 0;
    let marketingNum = 0;
    let financeNum = 0;
    let administrationNum = 0;

    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].department == "Development") {
          developmentNum++;
        } else if (employeeArr[i].department == "Marketing") {
          marketingNum++;
        } else if (employeeArr[i].department == "Finance") {
          financeNum++;
        } else if (employeeArr[i].department == "Administration") {
          administrationNum++;
        }
}
console.log('d',developmentNum);
console.log('m',marketingNum);
}

Employee.prototype.avgSalary = function () {
let developmentSalarySum = 0;
let marketingSalarySum = 0;
let financeSalarySum = 0;
let administrationSalarySum = 0;

    switch (Employee.department) {
        case "Development":
            developmentSalarySum = this.salary(...levelSalary(this)) + developmentSalarySum;
            break;
        case "Marketing":
            marketingSalarySum = this.salary(...levelSalary(this)) + marketingSalarySum;
            break;
        case "Finanace":
            financeSalarySum = this.salary(...levelSalary(this)) + developmentSalarySum;
            break;
        default:
            administrationSalarySum = this.salary(...levelSalary(this)) + developmentSalarySum;
            break;
    }
    // console.log(developmentSalarySum)
    let developmentSalaryAvg = developmentSalarySum;
}

// function avgSalary () {
//     let developmentNum = 0;
//     let marketingNum = 0;
//     let financeNum = 0;
//     let administrationNum = 0;

//     let developmentAvg = 0;
//     let marketingAvg = 0;
//     let financeAvg = 0;
//     let administrationAvg = 0;

//     for (let i = 0; i < employeeArr.length; i++) {
//       if (employeeArr.department == "Development") {
//         developmentNum++;
//       } else if (employeeArr.department == "Marketing") {
//         marketingNum++;
//       } else if (employeeArr.department == "Finance") {
//         financeNum++;
//       } else if (employeeArr.department == "Administration") {
//         administrationNum++;
//       }
//     }

// }

let tableEl = document.getElementById("tableID");

Employee.prototype.renderTable = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = listDepartments() ;

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.emplyeesNumber(employeeArr);

    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = this.avgSalary(this);

    // let tdEl4 = document.createElement('td');
    // trEl.appendChild(tdEl4);
    // tdEl4.textContent = this.department;
    
}


function renderAll() {
    for (let i = 0; i < employeeArr.length; i++) {
        // employeeArr[i].render();
        employeeArr[i].renderTable();
    }
}
renderAll();
