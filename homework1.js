function printToConsole(dataToPrinter) {
    console.log(dataToPrinter);
}
const pi = 3.14159;

function circleAreaCalculatior(diameter) {
    let circleArea = diameter * diameter * pi;
    return "A " + diameter + "cm sugarú kőr átmérője " + circleArea + " cm2."
}

printToConsole(circleAreaCalculatior(7));
