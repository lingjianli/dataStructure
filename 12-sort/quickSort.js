let swap = (arr, i, j) => {
  if(i == j) return ;
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let partition = (arr, pivot, left, right) => {
  const pivotVal = arr[pivot]
  let startIndex = left
  for(let i = left; i < right; i++) {
    if(arr[i] < pivotVal) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

let quickSort = (arr, left, right) => {
  if(left < right) {
    let pivot = right
    let partitionIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1 )
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
quickSort(testArr, 0, testArr.length - 1);
console.log('sort', testArr)