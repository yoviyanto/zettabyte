// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
  var total =  0;
    for(var i=0;i<input.length;i++){                  
      if(isNaN(input[i])){
      continue;
        }
        total += Number(input[i]);
      }
      return total;
    } 

console.log(result(input));