function printToConsole(dataToPrinter) {
    console.log(dataToPrinter);
}

function cubeRootCalculator(number) {
    let cubeRootOfNumber = Math.cbrt(number);
    return cubeRootOfNumber;
}

printToConsole(cubeRootCalculator(128));