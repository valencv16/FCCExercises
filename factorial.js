let num = 5;
let factorial ;

function factorialCalculator (numInput){
  let orginalNum = numInput;
  let result =1;
  let resultMsg ;
 while (numInput !=0){
   result = result * numInput;
   numInput--;
 }

 return result;
}
factorial = factorialCalculator(num)
let resultMsg =`Factorial of ${num} is ${factorial}`
console.log(resultMsg)