/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Rafaela Schneggenburger';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/rafaela.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of Rafaela Schneggenburger');


/* Step 5 - Array */
let foodArray = ['Juice', 'Pho Soup', 'Lime', 'Passion fruit', 'Orange', 'Strawberry', 'Blueberry'];
foodElement.textContent = foodArray;

foodArray.push('Sushi');
foodElement.innerHTML += `<br>${foodArray}`

foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`

foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`








