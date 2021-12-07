import React from 'react'
// common calculation rules
const Calculate = (props) => {
        const { currentOperand, previousOperand, operation } = props;
        const prev = parseFloat(previousOperand)
        const current = parseFloat(currentOperand)
        if (isNaN(prev) || isNaN(current)) {return ""};
        let computation = "";
        switch (operation) {
            case "+":
                computation = prev + current
                break
            case "-":
                computation = prev - current
                break
            case "*":
                computation = prev * current
                break
            case "÷":
                computation = prev / current
                break
        }

        return computation.toString();
};

export default Calculate;