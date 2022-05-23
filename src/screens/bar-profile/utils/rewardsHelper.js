export function getSlicesOfSix(array) {
  let resultArray = [];
  let currArray = [];
  for (let index = 0; index < array.length; index++) {
    if ((index + 1) % 6 === 0) {
      currArray.push(array[index]);
      resultArray.push(currArray);

      if (index !== array.length - 1) {
        //not last, reset
        currArray = [];
      }
    } else {
      currArray.push(array[index]);
    }
  }

  if (currArray.length < 6) {
    resultArray.push(currArray);
  }

  console.log({resultArray});
  return resultArray;
}
