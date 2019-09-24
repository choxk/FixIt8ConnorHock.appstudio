/* 
How many times will this FOR loop print an alert message to the user? 
for (i = 0; i <= 5; i++) {
   newLabel = "another iteration in the for loop/n");
   alert(newLabel);
};

ANSWER: The "for" loop will print a message 7 times.
_______________
What is the minimum number of times this loop will iterate (run)? 
var x = 5;
while (x < 10) {
    alert("The new value of X is: " + x);
    x = x + 1;
};

ANSWER: This loop should run at least 5 times (ex: 5, 6, 7, 8, 9).
_______________
What is the difference between a global and a local variable in Javascript? 
Explain and give an example of how each is written and used in a program. 

ANSWER: Global variables can be defined anywhere in your code, while local 
variables are only visible within a function when they’re defined
_______________
Why are global variables considered 'bad'?

ANSWER: It’s very easy for a global variable to “muck up” things in the future. For example, 
you must return all the way to the line where you initially declared it if you forget the name. 
Use of global variables can also cause users to redeclare existing variables.
*/