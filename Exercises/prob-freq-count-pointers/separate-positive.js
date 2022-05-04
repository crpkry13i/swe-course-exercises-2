function separatePositive(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] < 0 && nums[end] > 0) {
      // ES2015
      // [nums[start], nums[end]] = [nums[end], nums[start]];

      // ES5
      var temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start += 1;
      end -= 1;
    } else {
      if (nums[start] > 0) start += 1;
      else end -= 1;
    }
  }
  return nums;
}
