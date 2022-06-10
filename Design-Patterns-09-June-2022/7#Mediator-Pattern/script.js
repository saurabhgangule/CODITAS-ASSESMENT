// 7# Mediator Pattern

function member (name) {
  this.name = name;
  this.chatroom = null;
}

member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },
  
  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

function chatroom () {
  this.members = {};
}

chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  }
}

// Creating Chatroom
const createChat = new chatroom();

// Creating Members
const saurabh = new member("Saurabh");
const anil = new member("Anil");
const nana = new member("Nana");

// Adding members to chatroom
createChat.addMember(saurabh);
createChat.addMember(anil);
createChat.addMember(nana);

// Sending messages
saurabh.send("Hey, Whats up!", anil);
anil.send("Nothing, just chilling!", saurabh);
nana.send("How are you bro!", anil);



