// 1# Factory Pattern

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function employeesFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      
      case 2:
        return new Tester(name);
    }
  }
}

function print() {
  console.log("I'm "+this.name+" and I'm a "+this.type);
}

const employeeFactory = new employeesFactory();
const employees = [];

employees.push(employeeFactory.create("Saurabh", 1));
employees.push(employeeFactory.create("Shardul", 2));
employees.push(employeeFactory.create("Akash", 1));
employees.push(employeeFactory.create("Neha", 1));
employees.push(employeeFactory.create("Nana", 2));
employees.push(employeeFactory.create("Anil", 1));

employees.forEach(emp => {
  print.call(emp);
})