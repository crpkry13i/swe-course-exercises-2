// add whatever parameters you deem necessary
function countPairs(arr, sum) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        count++;
      } else {
        continue;
      }
    }
  }
  return count;
}
