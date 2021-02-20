// 8
// 1846
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// "Your name is Alejandro and you like purple"
// "Your name is Melissa and you like green"
// "Your name is undefined and you like green"

// Maya
// Marisa
// Chi

// Raindrops on roses
// whiskers on kittens
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// [10, 30, 20]

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

/* Write an ES2015 Version */
const {a, b} = obj.numbers;


var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/* Write an ES2015 Version */
[arr[1], arr[0]] = [arr[0], arr[1]];

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});