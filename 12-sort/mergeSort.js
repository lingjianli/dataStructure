/** 
 * 归并排序
*/

let mergeArr = (left, right) => {
  let temp = []
  let leftIndex = 0
  let rightIndex = 0

  while (left.length > leftIndex && right.length > rightIndex) {
    if(left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }

  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr
  let middle = Math.floor(arr.length / 2)

  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return mergeArr(mergeSort(left), mergeSort(right))
}

const testArr = []
let i = 0
while (i < 100) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}

let res = mergeSort(testArr)
console.log(res)