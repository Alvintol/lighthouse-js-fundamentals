//Conditions
/*
Create an object called facebookProfile. The object 
should have 3 properties:

 - your name
 - the number of friends you have, and
 - an array of messages you've posted (as strings)

 The object should also have 4 methods:

 - postMessage(message) - adds a new message string 
 to the array
 - deleteMessage(index) - removes the message 
 corresponding to the index provided
 - addFriend() - increases the friend count by 1
 - removeFriend() - decreases the friend count by 1
*/

let facebookProfile = {
  name: "Alvin",
  friends: 977,
  messages: [
    "message 1",
    "message 2",
    "message 3"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends = facebookProfile.friends++;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends = facebookProfile.friends--;
    }
  }
};
console.log(facebookProfile);