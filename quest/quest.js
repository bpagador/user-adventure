import quests from '../data/quest-data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(quests, questId);

const img = document.getElementById('img');
const h3 = document.getElementById('h3');
const div = document.getElementById('div');
const form = document.getElementById('form');

img.src = '../assets/' + quests.image;
h3.textContent = quests.title;
div.textContent = quests.description;

const labels = document.querySelectorAll('label');
const radios = document.querySelectorAll('input');

for (let i = 0; i < quest.choices.length; i++) {
    labels[i].append(quest.choices[i].description);
    radios[i].value = quest.choices[i].id;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const choiceId = data.get('quest');
    const choices = quest.choices;
    const choice = findById(choices, choiceId);

    scoreQuest(choice);
});

function scoreQuest(choice, quest) {
    const user = JSON.parse(localStorage.getItem('USER'));
    user.happiness += choice.happiness;
    user.wellness += choice.wellness;
    user.completed[quest.id] = true;
    localStorage.setItem('USER', JSON.stringify(user));

}
document.querySelectorAll('body').append(JSON.stringify(quest));
