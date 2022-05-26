const findTheOldest = function(people) {
    return people.reduce((oldest_prev, curr) => {
        let prev_age = ("yearOfDeath" in oldest_prev) ? oldest_prev.yearOfDeath - oldest_prev.yearOfBirth : new Date().getFullYear() - oldest_prev.yearOfBirth;
        let curr_age = ("yearOfDeath" in curr) ? curr.yearOfDeath - curr.yearOfBirth : Date.getFullYear() - curr.yearOfBirth;
        return (curr_age > prev_age) ? curr : oldest_prev;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
