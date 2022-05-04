// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  if (i === str1.length) {
    return true;
  } else {
    return false;
  }
}
