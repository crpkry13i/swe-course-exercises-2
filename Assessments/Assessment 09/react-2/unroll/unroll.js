const unroll = (squareArray) => {
  const unrolledArray = [];

  if (squareArray.length === 0) {
    return unrolledArray;
  }

  let rowStart = 0;
  let rowEnd = squareArray.length - 1;
  let colStart = 0;
  let colEnd = squareArray[0].length - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      unrolledArray.push(squareArray[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      unrolledArray.push(squareArray[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        unrolledArray.push(squareArray[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        unrolledArray.push(squareArray[i][colStart]);
      }
    }
    colStart++;
  }
  return unrolledArray;
};

module.exports = unroll;
