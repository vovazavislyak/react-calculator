export const calculate = (firstNumber, secondNumber, operation) => {
    if (operation === "+") {
        return firstNumber + secondNumber;
    } else if (operation === "-") {
        return firstNumber - secondNumber;
    } else if (operation === "÷") {
        return firstNumber / secondNumber;
    } else if (operation === "×") {
        return firstNumber * secondNumber;
    }
}