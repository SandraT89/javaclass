var num = "";
var i = 0;
document.write("<h3>Counting from 0 to 10:</h3>");
do {
  num += i + "<br>";
  if (i % 2 === 0) {
    document.write("count " + i + " is even <br>");
  } else {
    document.write("count " + i + " is odd<br>");
  }
  i++;
} while (i < 11);




let myNum = Number(prompt("enter a number between 5 and 20"));

document.write("<h3>Your number is " + myNum + "<br><br></h3>");

let counter = 1;
do {
  if (counter % 2 === 0) {
    document.write("counter " + counter + " is even <br>");
  } else {
    document.write("counter " + counter + " is odd<br>");
  }
  counter++;
} while (counter <= myNum);



let subjects = ["accounting", "algebra", "programming", "art", "data analytics"];
let output = "";
document.write ("<h3>Subjects</h3><br>");
subjects.forEach(function(subject, index) {
  output += subject;
  if (index < subjects.length - 1) {
    output += ", ";
  }
});
document.write(output);
