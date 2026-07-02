let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(firstName, property){
  let result ="No such contact";
  let index = contacts.findIndex(user => user.firstName === firstName);

 if (index >= 0 ){
  if( contacts[index].hasOwnProperty(property) ){
     result = contacts[index][property]
  }else{
    result ="No such property";
  }
  }
  
  return result;
}
console.log(lookUpProfile("Akira", "address"))
