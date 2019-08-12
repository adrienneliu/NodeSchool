var total = 0;
var limit = 10; 

for (var i = 0; i<limit; i++){
    total += i;
//i=0+1+2+3+4+5+6+7+8+9
//3+7+11+7+8+9
//10+18+17
//28+17 = 45
// console.log(total);
//if you leave console.log() inside the for loop, it will keep console logging the total, which is first 0, (+1)1, (+2)3, (+3)6, (+4)10, (+5)15, (+6)21...etc
//0,1,3,6,10,15,21,28,36,45
}

//console log outside so that we can let the loop run 10xs and then give us the final product, which is 45.
console.log(total);
//total = 45