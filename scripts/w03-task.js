/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let result = add(addNumber1, addNumber2);
    
    document.querySelector('#sum').value = result;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumber () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    let result = subtract(subtractNumber1, subtractNumber2);

    document.querySelector('#difference').value = result;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumber);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2
}

function multiplyNumbers () {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    let result = multiply(multiplyNumber1, multiplyNumber2);

    document.querySelector('#product').value = result;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}

function divideNumbers () {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    let result = divide(dividend,divisor);

    document.querySelector('#quotient').value = result;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById('array');
arrayElement.innerHTML = numbersArray.toString();

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
const oddsElement = document.getElementById('odds');
oddsElement.innerHTML = oddNumbers.toString();

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evenElements = document.getElementById('evens');
evenElements.innerHTML = evenNumbers.toString();

/* Output Sum of Org. Array */
const sumNumbers = numbersArray.reduce((sum, number) => sum + number);
const sumElements = document.getElementById('sumOfArray');
sumElements.innerHTML = sumNumbers.toString();

/* Output Multiplied by 2 Array */
const prodNumbers = numbersArray.map(number => number * 2);
const prodElements = document.getElementById('multiplied');
prodElements.innerHTML = prodNumbers.toString();

/* Output Sum of Multiplied by 2 Array */
const sumProduct = prodNumbers.reduce((sum, number) => sum + number);
const sumProductElement = document.getElementById('sumOfMultiplied');
sumProductElement.innerHTML = sumProduct.toString();