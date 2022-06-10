// 4# Iterator Pattern

const items = [123, 'saurabh', 3.14, true];

function iterator(items) {
    this.items = items;
//     this.index = 0;
    this.index = this.items.length - 1;
}

iterator.prototype = {
  hasNext: function() {
//     return this.index <= this.items.length - 1;
    return this.index >= 0;
  },
  
  next: function() {
    return this.items[this.index--];
  }
}

const iter = new iterator(items);

while(iter.hasNext())
  console.log(iter.next());

