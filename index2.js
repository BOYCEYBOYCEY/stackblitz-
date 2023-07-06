// array of student objects
const students = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

//  function for sorting
function compareStudents(a, b) {
  // Sort based on total marks
  if (a.chemistry + a.biology !== b.chemistry + b.biology) {
    return (b.chemistry + b.biology) - (a.chemistry + a.biology);
  }
  
  // Sort based on biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }
  
  // Sort based on date of birth
  return new Date(a.dob) - new Date(b.dob);
}

// Sorting the array of student objects
students.sort(compareStudents);


students.forEach((student) => {
  console.log(student.name);
});