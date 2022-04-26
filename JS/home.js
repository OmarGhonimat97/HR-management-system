'use strict';
// export {Ghazi,Lana,Tamara,Safi,Omar,Rana,Hadi};
// export {Employee, levelSalary, handleSubmit, saveData, getData};
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

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }

// Employee.prototype.id = function() {
//     for (let i = 100; i > Employee.length; i++) {
//         Employee.employeeID = i;
//         console.log(Employee.employeeID)
//         return Employee.employeeID  
//     }
// }

Employee.prototype.salary = function (min, max) {
    let salaryBeforeTax = Math.floor(Math.random() * (max - min)) + min;
    // console.log (min);
    // console.log (max);
    // console.log(salaryBeforeTax);
    return salaryBeforeTax * (1 - 0.075)
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
        default:
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
    // document.write(`<h3> ${this.fullName} </h3>`)
    // document.write(`<h4> ${this.employeeID} </h4>`)
    // document.write(`<h4> ${this.department} </h4>`)
    // document.write(`<h4> ${this.level} </h4>`)
    // document.write(`<h4> ${this.salary(...levelSalary(this))} </h4><br>`)


    // document.write(`<h3> ${this.level} </h3>`)
    // document.write(`<h3> ${this.id(Employee)} </h3>`)
}

Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();

let form = document.getElementById("form");
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target.fullname.value)
    // console.log(event.target.department.value)


    function randID() {
        let val = Math.floor(1000 + Math.random() * 9000);
        // if previous val == val  let val = Math.floor(1000 + Math.random() * 9000);
        // let ID = ++Hadi.employeeID;
        // let arrID = ID;
        // arrID.push(ID)
        return val
    }
    let inputFullName = event.target.fullname.value;
    let inputDepartment = event.target.department.value;
    let inputLevel = event.target.level.value;
    let inputimage = event.target.image.value;
    // let inputID = 100;
    let inputEmployee = new Employee(randID(), inputFullName, inputDepartment, inputLevel, inputimage, levelSalary(Employee))

    inputEmployee.render();

    saveData(employeeArr);
}

// >> save to local storage
function saveData(data) {
    let stringObject = JSON.stringify(data);
    localStorage.setItem("employees", stringObject);
}




// get data from local storage
function getData() {
    let retrievedData = localStorage.getItem("employees");
    let arrayData = JSON.parse(retrievedData);

    if (arrayData != null) {

        for (let i = employeeArr.length; i < arrayData.length; i++) {
            var element = new Employee(
                arrayData[i].employeeID,
                arrayData[i].fullName,
                arrayData[i].department,
                arrayData[i].level,
                arrayData[i].image,
                arrayData[i].salary
                );
        }
        element.render();
        element.renderTable();
    }

}

getData();