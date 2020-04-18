export default function makeUser(_formData) {
    const userName = _formData.get('name');

    const userObject = {
        name: userName,
        completed: {},
        happiness: 50,
        wellness: 0,
    };

    return userObject;
}