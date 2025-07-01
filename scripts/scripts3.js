// control structure

    // 1. conditional statement 
    const age_limit = 18 ;
    const heavy_driver_age = 21;

    let age = 17;
    // if-else ladder
    if(age >= heavy_driver_age){
        console.log(` your age is ${age} cant drive heavy vechile`);
    }
    else if(age >= age_limit){
        console.log(`your age is ${age} can drive`);
    }
    else{
        console.log(` your age is ${age}  its below `);
    }

    //  nested if 
    if(age >= heavy_driver_age){
        console.log(` your age is ${age} cant drive heavy vechile`);

        if(age >= age_limit){
            console.log(`your age is ${age} can drive`);
        }
    }
    else{
        console.log(` your age is ${age}  its below `);
    }

    // b. ternary operator
    // used to decide values based on condition 
    // <variable>= condition ? <value if true>:<value if false>
    let message = age >= age_limit ? 'you can drive' : 'you cannot drive';
    console.log(message);