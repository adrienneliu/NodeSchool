var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(evenNumbers);

//filter = the result we want 
//give it the function, that we define next. also using a filter method

//we pass the number array into evenNumber function because we want it to return even numbers. 
function evenNumbers (number) {
    return number % 2 === 0;

}
console.log(filtered);

