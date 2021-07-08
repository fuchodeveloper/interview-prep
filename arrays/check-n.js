// question - https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

function checkIfExist(array) {
  if (array.length === 0) return true;
  
  for(let i = 0; i < array.length; i++) {
    const existsValue = array.indexOf(array[i] * 2);
    if (existsValue !== -1 && existsValue !== i) return true;
  }
  return false;
}
