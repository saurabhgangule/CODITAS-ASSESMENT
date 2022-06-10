// 3# Strategy Pattern

function flyKart () {
  this.calculate = package => {
    return 100;
  }
}

function delhivary () {
  this.calculate = package => {
    return 150;
  }
}

function xpressBees () {
  this.calculate = package => {
    return 200;
  }
}

function shipping () {
  this.company = "";
  
  this.setStrategy = company => {
    this.company = company;
  }
  
  this.calculate = package => {
    return this.company.calculate(package);
  }
}

const flykart = new flyKart();
const delhivery = new delhivary();
const xpressBee = new xpressBees();
const package = {
  package: 'xyz',
  weight: '1kg',
  address: 'london'
}

const shippingProccess = new shipping();
shippingProccess.setStrategy(flykart);
console.log(`flyKart: ${shippingProccess.calculate(package)}`);

shippingProccess.setStrategy(delhivery);
console.log(`delhiVary: ${shippingProccess.calculate(package)}`);

shippingProccess.setStrategy(xpressBee);
console.log(`xpressBees: ${shippingProccess.calculate(package)}`)