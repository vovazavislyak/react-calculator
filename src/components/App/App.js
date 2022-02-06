import './App.css';
import Button from "../Button/Button";
import Display from "../Display/Display";
import {useState} from "react";
import {calculate} from "../../HelperFunctions";

const buttonsSymbols = "←C÷789×456-123+±0.=";
const operations = "÷×-+=";

const App = () => {
    const [firstRow, setFirstRow] = useState("");
    const [secondRow, setSecondRow] = useState("");

    const executeOperation = () => {
        const firstNumber = Number(firstRow.slice(0, -1));
        const secondNumber = Number(secondRow);
        const previousOperation = firstRow.slice(-1);

        return calculate(firstNumber, secondNumber, previousOperation);
    }

    const handleOperation = (operation) => {
        if (isNaN(secondRow)) {
            return;
        }

        if (operation !== "=") {
            let operationResult = secondRow;
            if (firstRow !== "" && firstRow.slice(-1) !== "=") {
                operationResult = executeOperation();
            }

            setFirstRow(operationResult + operation);
            setSecondRow("");
        } else if (operation === "=" && firstRow.slice(-1) !== "=") {
            const operationResult = executeOperation();
            let secondNumber = Number(secondRow);
            if (secondNumber < 0) {
                secondNumber = `(${secondNumber})`;
            }

            setFirstRow(prev => prev + secondNumber + "=");
            setSecondRow(operationResult.toString());
        }
    };

    const onClickHandler = (buttonText) => {
        if (buttonText === " ") {
            return;
        }

        if (operations.indexOf(buttonText) !== -1) {
            handleOperation(buttonText);
        } else if (buttonText === "±") {
            setSecondRow(prev => prev[0] === "-" ? prev.slice(1) : "-" + prev);
        } else if (buttonText === "." && secondRow.indexOf(".") === -1) {
            setSecondRow(prev => prev + ".");
        } else if (buttonText === "←") {
            setSecondRow(prev => prev.slice(0, -1));
        } else if (buttonText === "C") { // clear
            setFirstRow("");
            setSecondRow("");
        } else if (!isNaN(buttonText) && secondRow.length <= 25) { // is digit
            setSecondRow(prev => prev + buttonText);
        }
    };

    const buttons = [...buttonsSymbols].map((buttonText, index) => {
        return <Button
            text={buttonText}
            key={index}
            onClick={() => onClickHandler(buttonText)}
        />;
    });

    return (
        <div className={"page"}>
            <div className={"calculator-container"}>
                <Display
                    firstRow={firstRow}
                    secondRow={secondRow}
                />
                <div className={"button-container"}>
                    <Button />
                    {buttons}
                </div>
            </div>
        </div>
    );
}

export default App;
