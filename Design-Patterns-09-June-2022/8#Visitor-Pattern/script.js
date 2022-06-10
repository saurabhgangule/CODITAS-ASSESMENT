// 8# Visitor Pattern

function employee (name, salary) {
  this.name = name;
  this.salary = salary;
}

employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  
  setSalary: function (salary) {
    this.salary = salary;
  },
  
  accept: function (visitorFunction) {
    visitorFunction(this);
  }
}

// //////////

const saurabh = new employee("Saurabh", 9000);
console.log(saurabh.getSalary()); // Prv. salary 9000

function doExtraSalary(emp) {
  emp.setSalary(emp.getSalary() + 2000);
}
saurabh.accept(doExtraSalary);

console.log(saurabh.getSalary()); // Curr. salary 11000