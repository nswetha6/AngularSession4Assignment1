"use strict";
/*2. Try to consume that interface and function from another file with the help of namespace
 3. The function should display a message in a console.log().  */
exports.__esModule = true;
var NameSpace_1 = require("./NameSpace");
/*
 ///<reference path ="NameSpace.ts"/>
 */
//console.log("name is "+p1.name + " city is "+ p1.city +" ph number is "+ p1.ph);
var xyz = NameSpace_1.n1.sample1({ 'name': 'pallavi', 'city': 'Bnglore', 'ph': 12324343 });
console.log("From sample1 function of namespace n1 --" + xyz);
