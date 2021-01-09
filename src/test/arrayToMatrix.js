let arr = [1,2,3,4,5,6,7,8,9,10]

function reducer(resArr,length,result) {
  let newArr = []
  for (let i = 0; i < length; i++) {
    newArr.push(resArr.shift())
  }
  result.push(newArr)
  if (resArr.length >= length) {
    reducer(resArr,length,result)
  } else {
    result.push(...resArr)
  }
  // console.log(result);
  return result
}

function arrayToMatrix(arr,length) { 
  let result = []
  return reducer(arr,length,result)
}
console.log(arrayToMatrix(arr,4));
// arrayToMatrix(arr,5)