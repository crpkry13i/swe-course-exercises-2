const double = (arr) => arr.map(val => val * 2);

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);