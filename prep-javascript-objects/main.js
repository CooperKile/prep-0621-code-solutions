var person = {
  firstName: 'Cooper',
  lastName: 'Kile',
  hobby: 'photography'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('This persons full name is', fullName);

person.job = 'photographer';
console.log('This persons current job is a', person.job);

person.previousJob = 'coder';
console.log('This persons previous job is a', person.previousJob);

console.log('The complete person object', person);
