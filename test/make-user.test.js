// IMPORT MODULES under test here:
import makeUser from '../make-user.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'dani');

    const expected = {
        id: 'dani',
        happiness: 0,
        wellness: 0,
        completed: {},
        
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const userObject = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, userObject);
});
