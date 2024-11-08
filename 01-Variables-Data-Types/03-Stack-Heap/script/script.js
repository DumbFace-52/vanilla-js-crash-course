// Examples
// These values are stored on the stack

const name = 'Dumbface';
const age = 20;

// Reference Types
// These values are stored on the heap

const person = {
    name: 'Little Princess',
    age: 9
};

let newName = name;
console.log(name, newName);

newName = 'Guardian';
console.log(name, newName);

let newPerson = person;
console.log(person, newPerson);

newPerson.name = 'Future Princess';
newPerson.age = 19;
console.log(person, newPerson);