//!global variable
var a = 1, b = 2, c = 3;

(function firstFunction(){
    //*local-destroyed every time function is executed
    var b = 5, c = 6; 

        (function secondFunction(){
            //*loco-destroyed every time function is executed
            var b=8;
            console.log("a: " +a+ ", b: "+b+ ", c: "+c);
            //=1, 8, 6
                (function thirdFunction(){
                    //*loco-destroyed every time function is executed
                    var a = 7, c = 9;
                        (function fourthFunction(){
                            //*loco-destroyed every time function is executed
                            var a = 1, c = 8;
                        })();
                })();
        })();
//a-1, b-8, c-6
// firstFunction();
//1, 5, 6
// console.log("a: " +a+ ", b: "+b+ ", c: "+c);
})();

