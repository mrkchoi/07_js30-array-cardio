
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let isAdult = people.some(person => {
  let year = new Date().getFullYear();
  return year - person.year >= 18;
});
console.log(isAdult);

// is everyone 19 or older?
Array.prototype.every() 
let isAdult = people.every(person => {
  let year = new Date().getFullYear();
  return year - person.year >= 18;
});
console.log(isAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

let comment = comments.find(comment => {
  if(comment.id === 823423) {
    return comment;
  }
});
console.log(comment);


let comment = comments.find(comment => comment.text === 'Nice Nice Nice!');
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

let findDelete = comments.findIndex(comment => comment.id === 823423);
let newComments = [
  ...comments.slice(0, findDelete),
  ...comments.slice(findDelete + 1)
];

console.table(newComments);