// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  var num1String = num1.toString();
  var num2String = num2.toString();
  var num1Hash = {};
  var num2Hash = {};
  for (var i = 0; i < num1String.length; i++) {
    if (num1Hash[num1String[i]]) {
      num1Hash[num1String[i]]++;
    } else {
      num1Hash[num1String[i]] = 1;
    }
  }
  for (var j = 0; j < num2String.length; j++) {
    if (num2Hash[num2String[j]]) {
      num2Hash[num2String[j]]++;
    } else {
      num2Hash[num2String[j]] = 1;
    }
  }
  for (var key in num1Hash) {
    if (num1Hash[key] !== num2Hash[key]) {
      return false;
    }
  }
  return true;
}
