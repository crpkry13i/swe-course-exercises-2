// add whatever parameters you deem necessary
function countPairs(arr, sum) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        count++;
      } else {
        continue;
      }
    }
  }
  return count;
}
