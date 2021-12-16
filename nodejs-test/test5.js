// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  var conv = num.toString(2);
  var total =  0;
    for(var i=0;i<conv.length;i++)
      {                  
        if(isNaN(conv[i]=1)){
        continue;
          }
          total += Number(conv[i]);
        }
      return total;
    } 

console.log(result(number));