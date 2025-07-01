// Datatype

    //1. Primitive
    let i;
        // i. number
        i=0;
        console.log("Datatype of i :", typeof i ,"and the vaule is :",i);

        // ii. string
        i="hello";
        console.log("Datatype of i :", typeof i ,"and the vaule is :",i);

        // iii. boolean
        i = true;  //here (true and fales) is in small case not pascal case as python
        console.log("Datatype of i :", typeof i ,"and the vaule is :",i);

        // iv. undefined
        let j;
        console.log("Datatype of i :", typeof i ,"and the vaule is :",j);

        // v. null
        i=null;
        console.log("Datatype of i :", typeof i ,"and the vaule is :",i);

        // vi. symbol 
        //  used for creating unquie and special
        // mostly used unquie key for obgject
        i= Symbol('ascd');
        console.log("Datatype of i :", typeof i ,"and the vaule is :",i);


    // 2.non-primitive datatype
        // object -> it ia n inbuilt r user defined object (it follow the dic )

        // example
        let student = {
            first_name : 'aline',
            age : 20
        };
        console.log("student name:", student.first_name);
    
    // 3. operators 
        // i.arithmetic 
            // +,-,*,/,%,** 
            // in javascript , to increment a variable , we dont need to do
            // x=x+1;
            // we can do either way ++x or x++

            let x = 0;
            console.log(x++) // this is post increment , value updated after statment 
            console.log(x);
            console.log(++x);  // this is pre increment , vaule update befor stamenet

            // we do post and pre in '-' also
            // x-- ,--x

            // now,just like python, string datatype values when added using + symbol,
            // get concatenated
            let a ="Pavan";
            let b = "gowda";
            let full_name = a+ " " +b;
            console.log(full_name);
        
        // logical operater
            // and -> &&
            // or -> ||
            // not -> !
        
        // comparison operator
            //  >,<,>=,<=,!=,==,===

            // difference between == and ===
            let x1 = 123;
            let x2 ='123';

            // loose equality(==):check value only
            // convert to same datetype if possbile to compare)
            console.log("loose equality :",x1==x2);

            // strict equality (===): check actual datatype and compare the value
            console.log("strict equality :",x1===x2);


// strinh interpolation in javascript 

// to use multuple variable inside a string and build a dynamic string
 let fullname = 'pavan';
 let age = 10;
 let message = `${fullname} is ${age} year` // '`' it is used print only vaule not symbol and all and '$' is used as pyhton f

 console.log(message);


