/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  console.log("abdulwahab");
}
printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(a, b) {
  console.log(a - b);
}
printAge(2024, 1983);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, languge) {
  if (languge == "en") {
    console.log("hello " + name);
  } else if (languge == "es") {
    console.log("Hola " + name);
  } else if (languge == "fr") {
    console.log("Bonjour " + name);
  } else if (languge == "tr") {
    console.log("Merhaba " + name);
  } else {
    console.log("Good evening");
  }
}

printHello("wahab", "en");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " is greater than " + num1);
  } else {
    console.log("Both numbers are equal: " + num1);
  }
}

printMax(3, 2);
