multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }
  
  

  console.log(multiplicationTable(3))

//  [[1,2,3],
//   [2,4,6],
//   [3,6,9]]