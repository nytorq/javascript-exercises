/* 
- Calculate age of person
- Take that value, compare it to the next one. If age is less than, save current person.
If older, save prev person.
- Return the person of whoever .reduce() ends up with at the end.
*/

const findTheOldest = function(people) {
    return people.reduce((acc, person)=>{
        const currentYear = new Date().getFullYear();
        const prevAge = acc.yearOfDeath ? acc.yearOfDeath - acc.yearOfBirth : currentYear - acc.yearOfBirth;
        const currentAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        if (prevAge > currentAge) {
            return acc;
        } else {
            return person;
        }
    }, people[0]);
    // people.reduce((age, person)=>{
    //     let result;
    //     age = person.yearOfDeath - person.yearOfBirth;
    //     if (person.yearOfDeath - person.yearOfBirth > age) {
    //         result = person;
    //         age = person.yearOfDeath - person.yearOfBirth;
    //     }
    //     return result;
    //  })
    // people.filter((person)=>{
    //     let age = person.yearOfDeath - person.yearOfBirth;
    //     let currentAge = person.yearOfDeath - person.yearOfBirth;
    //     console.log(`Prev age is ${age} and currentAge is ${currentAge}`);
    // });
};

// Do not edit below this line
module.exports = findTheOldest;
