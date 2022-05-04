// add whatever parameters you deem necessary
function averagePair(arr, num) {
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    var avg = (arr[start] + arr[end]) / 2;
    if (avg === num) {
      return true;
    }
    if (avg < num) {
      start++;
    }
    if (avg > num) {
      end--;
    }
  }
  return false;
}
