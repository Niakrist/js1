function makeArr() {
  let arr = [];
  for (let i = 0; i <= 10000; i++) {
    arr.push(i);
  }
  return arr;
}

let myarr = makeArr();

function convertNum(num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result;
}

function chekNum(num1, num2) {
  if (+num1 === +num2) {
    return `num1= ${num1}, num2= ${num2} и они СОВЕРШЕННЫЕ`;
  } else {
    return `num1= ${num1}, num2= ${num2} и они другие`;
  }
}

function searchPerfectNum(arr) {

  let perfectnum = [];

  for (let elem of arr) {
    if (+elem === +convertNum(elem)) {
      perfectnum.push(elem);
    }
  }
  return perfectnum;
}

console.log(searchPerfectNum(myarr)); 