export default function makeUser(_formData) {
    const userName = _formData.get('name');
    const userClass = _formData.get('class');

    const userObject = {
        name: userName,
        class: userClass,
        completed: {},
        HP: 50,
        gold: 0,
    };

    return userObject;
}