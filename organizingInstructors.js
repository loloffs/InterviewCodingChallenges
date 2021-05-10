/*
From lighthouse katas:

In this exercise, we will be given a list of instructors and
we will create a single object to organize them based on their
course.

Create a function named organizeInstructors that will receive
an array of instructor objects, and will return a new object that
has the following format:

{
  CourseName: [instructors]
} 

*/

const organizeInstructors = function(instructors) {
  let instructorObj = {};
  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    let name = instructors[i].name;
    if(course in instructorObj) {
      instructorObj[course].push(name);
    } else {
      instructorObj[course] = [name];
    }
  }  
    return instructorObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }
