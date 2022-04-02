// function sortedFrequency(arr, num) {
//   let count = 0;
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === num) {
//       count++;
//       left = mid + 1;
//     } else if (arr[mid] < num) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return count;
// }

function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high);
    } else {
      return findFirst(arr, num, low, mid - 1);
    }
  }
  return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findLast(arr, num, low, mid - 1);
    } else {
      return findLast(arr, num, mid + 1, high);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
