//Quick Question #1
// Set(4) {1, 2, 3, 4}

//Quick Question #2
// "ref"

//Quick Question #3
// Map(2) {Array(3) => true, Array(3) => false}

const hasDuplicate = (arr) => new Set(arr).size !== arr.length 

function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}