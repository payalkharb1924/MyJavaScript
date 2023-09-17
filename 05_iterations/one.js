// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("no. 5");
    }
    // console.log(element);
    
}


for (let i=0;i<=10;i++){
    // console.log(`outer loog ${i}`);
    for(let j=0;j<=10;j++){
        // console.log(`inner loop ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}


let myArray = ["Flash","Batman","Superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break and continue

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("detected");
        continue;
    }
    console.log(`value of i is ${i}`);    
}
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("detected");
        break;
    }
    console.log(`value of i is ${i}`);    
}








