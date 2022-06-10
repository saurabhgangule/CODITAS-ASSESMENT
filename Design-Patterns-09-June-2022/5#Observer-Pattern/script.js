// 5# Observer Pattern

function subject () {
  this.observerItems = [];
}

subject.prototype = {
  subscribe: function (fn) {
    this.observerItems.push(fn);
  },
  
  unsubscribe: function (unsubcribeFn) {
    this.observerItems =  this.observerItems.filter((fn) => fn !== unsubcribeFn);
  },
  
  fire: function () {
    this.observerItems.forEach(fn => fn.call());
  }
}

const subjectInit = new subject();
const observerOne = function () {
  console.log('this is observer one!');
}
const observerTwo = function () {
  console.log('this is observer two!');
}

subjectInit.subscribe(observerOne);
subjectInit.subscribe(observerTwo);
subjectInit.unsubscribe(observerOne);

subjectInit.fire();