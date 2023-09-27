function printToConsole(dataToPrinter) {
    console.log(dataToPrinter);
}
const pi = Math.PI;

function circleAreaCalculator(radius) {
    let circleArea = Math.pow(radius,2) * pi;
    return `A ${radius} cm sugarú kőr területe ${circleArea} cm2.`
}

printToConsole(circleAreaCalculator(7));
