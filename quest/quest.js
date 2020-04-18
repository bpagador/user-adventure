import quests from '../data/quest-data.js';
import findById from '../data/utils.js';

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(quests, questId);

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('choice-result');

title.textContent = quest.title;
image.src = '../assets/' + quest.image;

h3.textContent = quests.title;
div.textContent = quests.description;

const labels = document.querySelectorAll('label');
const radios = document.querySelectorAll('input');

for (let i = 0; i < (quests.choices).length; i++) {
    labels[i].append(quests.choices[i].description);
    radios[i].value = quests.choices[i].id;
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
