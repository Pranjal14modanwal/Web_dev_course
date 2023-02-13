console.log("This is tutorial 53");

// [Method-1] using console.log at every step

// let name = "Harry";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// console.log( name +  " is a good boy");
// // use name instead of Harry if it is comming from variable
// console.log( name1 +  " is a good boy");
// console.log( name2 +  " is a good boy");
// console.log( name3 +  " is a good boy");

// [Method-2] to avoid the repetion of console.log at every stage we will make the use of function here
// 1.)
// function greet(name){
//     console.log(name + " is a good boy");
// }

// let name = "Harry";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// greet(name);
// greet(name1);
// greet(name2);
// greet(name3);

// 2.)
// function greet(name, greetText){
//     let name1 = "Name1";           /*This is a local variable it will only applicable under this bracket only*/           
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy");
// }

// let name = "Harry";               /* This is a gloabal variable */
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// let greetText = "Good Morning";
// greet(name, greetText);
// greet(name1, greetText);
// greet(name2, greetText);
// greet(name3, greetText);


//  3.)
// function greet(name, greetText = "Greetings from javascript"){
//     let name1 = "Name1";                      
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy");
// }
// let name = "Harry";               
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// let greetText = "Good Morning";
// greet(name, greetText);
// greet(name1, greetText);
// greet(name2, greetText);
// greet(name3);            // Now by default the value of greetText get printed if  haven't given the greetText


// 4 .) RETURN VALUE CONCEPT
// function greet(name, greetText = "Greetings from javascript"){
//     let name1 = "Name1";                      
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy");
// }
// let name = "Harry";               
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// let greetText = "Good Morning";
// greet(name, greetText);
// greet(name1, greetText);
// greet(name2, greetText);
// let returnVal = greet(name3);
// console.log(returnVal)          (we get undefined as a result because greettext doesnot return the value
                                //  yh sirf console.log kar deta hai)



// 5 .) Rettun value
function sum(a,b,c){
    let d = a + b +c;
    return d;
    console.log("Function is returned")    /* This will not execute because after return nothing execute */
}

let returnVal = sum(1,2,3);
console.log(returnVal)




