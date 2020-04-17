import makeUser from './make-user.js';

const myForm = document.getElementById('user-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = makeUser(myForm);

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

});