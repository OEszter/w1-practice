let variable1 = "kismacska";
/*let variable2 = 101;
let variable3 = true;   //boolean
let variable4 = null;   //null

let variableArray = ["alma",  "barack", "szilva", "vegyes"]   //vegyes

let variableArray2 = ["autó", 54, true, undefined, false, "62"]
let variableArray3 = [1, 2, 3, 4, 5]
let variableArray4 = [variable1, variable2, variable3, variable4]

console.log(variableArray[0]);
console.log(variableArray[1]);
console.log(variableArray[2]);
console.log(variableArray[3]);

// let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}

for (let counter = 0; counter <= 5; counter++) {
    console.log(counter);
   
}*/



let array = ["alma",  "barack", "szilva", "vegyes", "szőlő", "birs", "törköly"]   

for (let index = 0; index < array.length; index++) {
        if (array[index].includes('l')) {
        console.log(array[index],'tartalmaz L betűt');
    } else {
        console.log(array[index], 'nem tartalmaz L betűt');
    }
}

/*
for (let index = 0; index < variable1.length; index++) {
    console.log(variable1[index]);
 //   console.log("end of iteration");
}*/

//console.log("end of code");

