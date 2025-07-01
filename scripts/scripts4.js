// switch statement
    let choice = 2
    switch(choice){
        case 1:
            console.log(`you selected choice ${choice}`)
            break;
        case 2:
            console.log(`you select choice ${choice}`)
            break;
        case 3:
            console.log(`you select choice ${choice}`)
            break;
        case 4:
            console.log(`you select choice ${choice}`)
            break;
    }

// for loop 
// in loop there are 3 types
    // 1. type
    for(let i=1; i<=5; i++){
        console.log(i);
    }
    // 1.a
    let x = 10
    for(let i=x ; i<=1; i++){
        console.log(i);
    }

    // 2.a.type using'[]' while console it will give itreeting value
    let arr1 = ['pavan','gowda','hi']
    for (let i in arr1){
        console.log(arr1[i]);
    }
    // 2.b using 'at' while consle it will give ittreating value
    let arr2 = ['pavan','gowda','hi']
    for (let i in arr2){
        console.log(arr1.at(i));
    }
    // 2.c using 'of' in for and in console if use '()' this brakect while console we get itterate value
    let arr3 = ['pavan','gowda','hi']
    for (let i of arr1){
        console.log(i);
    }

    let arr4 = ['pavan','gowda','hi']
    for (let i of arr1){
        console.error(i);
    }

    let arr5 = ['pavan','gowda','hi']
    for (let i of arr1){
        console.warn(i);
    }