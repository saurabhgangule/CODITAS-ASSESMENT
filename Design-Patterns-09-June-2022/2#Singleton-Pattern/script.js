// 2# Singleton Pattern

function Process(state) {
  this.state = state;
}

const singleTon = (function() {
  function processManager() {
    this.numProcess = 0;
  }
  
  let pManager;
  
  function createProcessManager() {
    pManager = new processManager();
    return pManager;
  }
  
  return {
    getProcessManager:() => {
      if(!pManager)
        pManager.createProcessManager();
        
      return pManager;
    }
  }
})()

const processManager = singleTon.getProcessManager();
const processManager2 = singleTon.getProcessManager();

console.log(processManager === processManager2);