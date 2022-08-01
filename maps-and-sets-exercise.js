// What does the following code return?

new Set([1, 1, 2, 2, 3, 4])

// { 1, 2, 3, 4 }

// What does the following code return?

[...new Set("referee")].join("")

// 'ref'

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// { [1, 2, 3] => true, [1, 2, 3] => false }

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (array) => {
    const filtArray = new Set(array);
    return filtArray.size === array.length ? false : true;
};

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (string) => {
    const vowels = 'aeiou';
    const strLow = string.toLowerCase();
    const newMap = new Map();
    for (let char of strLow) {
        if (vowels.includes(char)) {
            if (newMap.get(char)) {
                newMap.set(char, newMap.get(char) + 1);
            } else newMap.set(char, 1);
        }
    }
    return newMap;
};
