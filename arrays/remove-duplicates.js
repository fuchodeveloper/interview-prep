// Question - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums) {
  let n = nums.length;

  if (n === 0) return 0;

  /* Two pointer technique 
  i => slow runner
  j => fast runner
  */
  let i = 0;
  for(let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1;
}
