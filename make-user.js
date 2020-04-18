export default function makeUser(formData) {
    
    const userObject = {
        id: formData.get('name'),
        happiness:0,
        wellness: 0,
        completed: {},
    
    };

    return userObject;
}