/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Rafaela Schneggenburger',
    profilePicture: 'images/rafaela.png',
    favoriteFoods: [
        'Juice', 
        'Pho Soup', 
        'Lime', 
        'Passion fruit', 
        'Orange', 
        'Strawberry', 
        'Blueberry'
    ],
    hobbies: [
        'Read',
        'Workout',
        'Run',
        'Programming',
        'Sleep'
    ],
    placesLived:[],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: 'La Paz, Bolivia',
        length: '23 years'
    },
    {
        place:'Salt Lake, Utah',
        length: '2 years'
    },
    {
        place: 'Lombard, Illinois',
        lengtt: '3 months'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.profilePicture);
document.querySelector('img').setAttribute('alt', 'Profile image of Rafaela Schneggenburger')

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let ul = document.createElement('ul');
    ul.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(item=> {
    let dtElement = document.createElement('dt');
    let ddElement = document.createElement('dd');
    dtElement.textContent = item.place;
    ddElement.textContent = item.length;
    document.querySelector('#places-lived').appendChild(dtElement);
    document.querySelector('#places-lived').appendChild(ddElement);
})

