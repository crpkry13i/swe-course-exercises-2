// add whatever parameters you deem necessary
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
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
