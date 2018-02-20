"use strict";
/* 1. Create a namespace and add an interface and a function.
 2. Try to consume that interface and function from another file with the help of namespace
 3. The function should display a message in a console.log().  */
exports.__esModule = true;
// 1. Create a namespace and add an interface and a function.
var n1;
(function (n1) {
    function sample1(p1) {
        // console.log("name is "+p1.name + " city is "+ p1.city +" ph number is "+ p1.ph);
        console.log("name is " + p1.name + " \ncity is " + p1.city + " \nph number is " + p1.ph + " \n  ");
        return "all parameters returned";
    }
    n1.sample1 = sample1;
})(n1 = exports.n1 || (exports.n1 = {}));
//n1.sample1({'name':'Swe' , 'city':'hyd', 'ph': 123});
