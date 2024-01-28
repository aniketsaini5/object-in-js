
let person = {
    name: 'Aniket Saini',
    age: 18,
    occupation: 'Software Developer'
};

function printPersonDetails(personObj) {
    for (const property in personObj) {
        console.log(`${property}: ${personObj[property]}`);
    }
}

printPersonDetails(person);
