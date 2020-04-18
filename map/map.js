import quests from '../data/quest-data.js';
import makeListItemLink from './make-list-item-link.js';

const ul = document.getElementById('list');

quests.forEach((quest) => {
    const li = makeListItemLink(quest);

    ul.appendChild(li);
});