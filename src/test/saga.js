// function* helloSaga() {
//   console.log("Hello Sagas!");
// }
// let saga = helloSaga()
// // console.log(saga);
// saga.next()

let arr = [1,2,3,4,5]
Array.prototype.myForEach = function(fn){
  for (let i = 0; i < this.length; i++) {
    fn(this[i],i)
  }
}
Array.prototype.myMap = function(fn){
  var newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i],i))
  }
  return newArr
}
// arr.myForEach((item,index) => {
//   item = item + 1
//   console.log(item);
// })
var res = arr.myMap((item,index) => {
  return item = item * 2
})
console.log(res);