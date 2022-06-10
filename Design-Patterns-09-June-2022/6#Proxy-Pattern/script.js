// 6# Proxy Pattern

// API

function currencyPairAPI () {
  this.getValue = function (pair){
    console.log("calling external currency api");
    switch (pair) {
      case "USDINR":
        return "$60";
      
      case "USDGBP":
        return "$50";
      
      case "USDEUR":
        return "$30";
    }
  }
}

// ////////

// const fetchValue = new currencyPairAPI()

// console.log(fetchValue.getValue("USDEUR"));
// console.log(fetchValue.getValue("USDINR"));


// ///////

function currencyPairProxy () {
  this.api = new currencyPairAPI();
  this.cache = {}
  
  this.getValue = function(pair) {
    if (this.cache[pair] == null) {
      this.cache[pair] = this.api.getValue(pair);
    }
    return this.cache[pair];
  }
}

const proxyValue = new currencyPairProxy();
// first all calls
console.log(proxyValue.getValue('USDINR'));
console.log(proxyValue.getValue('USDEUR'));
console.log(proxyValue.getValue('USDGBP'));

//second all calls
console.log(proxyValue.getValue('USDINR'));
console.log(proxyValue.getValue('USDEUR'));
console.log(proxyValue.getValue('USDGBP'));
console.log(proxyValue.getValue('USDINR'));
console.log(proxyValue.getValue('USDEUR'));
console.log(proxyValue.getValue('USDGBP'));