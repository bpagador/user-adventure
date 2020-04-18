import makeUser from './make-user.js'; 
import { saveUser } from './data/local-storage.js';

const myForm = document.getElementById('user');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInfo = new FormData(myForm);
    const user = makeUser(userInfo);

    saveUser(user);

    window.location = 'map';
});