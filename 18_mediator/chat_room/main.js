class Person {
  constructor(name) {
    this.name = name;
    this.chatLog = [];
    this.room = null;
  }
  receive(sender, message) {
    let s = `${sender}: '${message}'`;
    this.chatLog.push(s);
    console.log(`[${this.name}'s chat session] ${s}`);
  }

  say(message) {
    this.room.broacast(this.name, message);
  }

  pm(who, message) {
    this.room.message(this.name, who, message);
  }
}

// It is the mediator handle the communication between person in the chatroom
// the person in the room have never has direct connection between each other (all through the chatroom)
class ChatRoom {
  constructor() {
    this.people = [];
  }

  join(p) {
    let joinMsg = `${p.name} joins the chat`;
    this.broacast("room", joinMsg);
    p.room = this;
    this.people.push(p);
  }

  broacast(source, message) {
    for (let p of this.people) {
      if (p.name !== source) {
        p.receive(source, message);
      }
    }
  }

  message(source, destination, message) {
    for (let p of this.people) {
      if (p.name === destination) {
        p.receive(source, message);
      }
    }
  }
}

let room = new ChatRoom();
let john = new Person("John");
let jane = new Person("Jane");

room.join(john);
room.join(jane);

john.say("Hi room");
jane.say("Oh, hello John");

let simon = new Person("Simon");
room.join(simon);
simon.say("hi everyone!");

jane.pm("Simon", "Glad you to join us!");
