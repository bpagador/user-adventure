import quests from '../data/quest-data.js';
import findById from '../data/utils.js';
import createChoice from './create-choice.js';

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(quests, questId);

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
//for generating results
// const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
//for generating results 
// const result = document.getElementById('result');
// const resultDescription = document.getElementById('choice-result');

title.textContent = quest.title;
image.src = '../assets/' + quest.image;
description.textContent = quest.description;

for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}







