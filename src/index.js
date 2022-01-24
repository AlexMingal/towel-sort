// You should implement your task here.

module.exports = function towelSort (matrix) {

  let arr = [];
    
  for (let i in matrix) {
      if (i%2 ===1) {
//      arr.push(matrix[i].reverse().join('').split(''));
        arr = arr.concat(matrix[i].reverse());
}
        else {
        arr = arr.concat(matrix[i]);
    } 

//    else arr.push(matrix[i].join('').split(''));
    }
 
return arr;

  }
