/* 1. Create a namespace and add an interface and a function.
 2. Try to consume that interface and function from another file with the help of namespace
 3. The function should display a message in a console.log().  */


// 1. Create a namespace and add an interface and a function.

export namespace n1  {   
    export interface personobj {   
        name:string;
        city:string;
        ph:number;
    } 
    export function sample1(p1:personobj):any{   
       // console.log("name is "+p1.name + " city is "+ p1.city +" ph number is "+ p1.ph);
       console.log(`name is ${p1.name} 
city is ${p1.city} 
ph number is ${p1.ph} 
  `);  
 return "all parameters returned";

    }
}
//n1.sample1({'name':'Swe' , 'city':'hyd', 'ph': 123});



