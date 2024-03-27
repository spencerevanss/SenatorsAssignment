import { senators } from "../data/senators.js";

// tag html elements
const myNavigation = document.querySelector('nav');
const myParent = document.querySelector('#senatorsHere');


function displaySenators(x) {
   
    myParent.innerHTML = '';

    // Loop 
    x.forEach(person => {
        const card = document.createElement('div');
        card.classList.add('card');

      
        const name = document.createElement('h3');
        const fullName = person.middle_name
            ? `${person.first_name} ${person.middle_name} ${person.last_name}`
            : `${person.first_name} ${person.last_name}`;
        name.textContent = fullName;
        card.appendChild(name);

        const image = document.createElement('img');
        const charNumber = person.govtrack_id;
        image.src = `https://www.govtrack.us/static/legislator-photos/${charNumber}-200px.jpeg`;
        card.appendChild(image);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const party = document.createElement('p');
        party.textContent = person.party === 'R' ? 'Republican' : 'Democrat';
        cardContent.appendChild(party);

        const state = document.createElement('p');
        state.textContent = `State: ${person.state}`;
        cardContent.appendChild(state);

        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = `Phone: ${person.phone}`;
        cardContent.appendChild(phoneNumber);

        card.appendChild(cardContent);

        name.style.textAlign = 'center';

      
        if (person.party === 'R') {
            card.style.border = '2px solid red'; 
        } else if (person.party === 'D') {
            card.style.border = '2px solid blue'; 
        }

        myParent.appendChild(card);
    });
}

// Filters for the senators 
document.getElementById('maleBtn').addEventListener('click', () => {
    const maleSenators = senators.filter(person => person.gender === 'M');
    displaySenators(maleSenators);
});

document.getElementById('femaleBtn').addEventListener('click', () => {
    const femaleSenators = senators.filter(person => person.gender === 'F');
    displaySenators(femaleSenators);
});


document.getElementById('republicanBtn').addEventListener('click', () => {
    const republicanSenators = senators.filter(person => person.party === 'R');
    displaySenators(republicanSenators);
});

document.getElementById('democratBtn').addEventListener('click', () => {
    const democratSenators = senators.filter(person => person.party === 'D');
    displaySenators(democratSenators);
});


document.getElementById('allBtn').addEventListener('click', () => {
    displaySenators(senators);
});


displaySenators(senators);
