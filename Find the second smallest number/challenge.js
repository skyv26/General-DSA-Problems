const findSecondSmallestNumberNotInTheList = (arr) => {
  arr = arr.sort((a,b) => a - b);
  let smallestNum = 0;
  arr.every((elem, index) => {
    let diff = arr[index + 1] - elem;
    if (diff > 1) {
      smallestNum = elem += 1;
      return false;
    }
    return true;
  });
  return smallestNum;
};

console.log(findSecondSmallestNumberNotInTheList([515,654,54156,4515,515,526]));
