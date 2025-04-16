import { useState } from "react"
import "./calculator.css"

function Calculator() {
    
    const [mainValue, setMainValue] = useState([])
    const [secValue, setSecValue] = useState([])
    let results = []

    function clean() {
        setMainValue([])
        setSecValue([])
        results = []
    }

    function remove() {
        setSecValue(v => v.slice(0, -1))
    }

    function appendNum(value) {
        setSecValue(v => [...v, value])
    }

    function action(value) {
        if (secValue.length != 0) {
            setMainValue(v => [...v, Number(secValue.join("")), value])
            setSecValue([])
        }
    }

    function showResults() {
        setMainValue(v => [...v, Number(secValue.join(""))])
        setSecValue([])
        let copiaMainValue = [...mainValue, Number(secValue.join(""))]
        let initialValue
        let operator

        copiaMainValue.forEach((iten, index) => {
            if (index == 0) {
                initialValue = iten
            }else if (typeof iten == "number") {
                switch (operator) {
                    case "%":
                        initialValue *= iten / 100
                        break;
                    case "*":
                        initialValue *= iten
                        break;
                    case "/":
                        initialValue /= iten
                        break;
                    case "-":
                        initialValue -= iten
                        break;
                    case "+":
                        initialValue += iten
                        break;
                    default:
                        console.error("ocorreu um erro com os operadores")
                        break;
                }
                initialValue = initialValue !== Math.floor(initialValue) ? initialValue.toFixed(2) : initialValue
            }else {
                operator = iten
            }
        })
        results = String(initialValue).split("")
        setSecValue(results)
        setMainValue([])

    }

    return (
        <div className="calc-container">
            <div className="visor" id="visor">{secValue}</div>
            <div className="calculator-btns">
                <button onClick={() => clean()} className="calc-btn clean">C</button>
                <button onClick={() => remove()} className="material-symbols-outlined calc-btn delete">backspace</button>
                <button onClick={() => action("/")} className="calc-btn">/</button>
                <button onClick={() => action("*")} className="calc-btn">X</button>
                <button onClick={() => appendNum(7)} className="calc-btn">7</button>
                <button onClick={() => appendNum(8)} className="calc-btn">8</button>
                <button onClick={() => appendNum(9)} className="calc-btn">9</button>
                <button onClick={() => action("+")} className="calc-btn">+</button>
                <button onClick={() => appendNum(4)} className="calc-btn">4</button>
                <button onClick={() => appendNum(5)} className="calc-btn">5</button>
                <button onClick={() => appendNum(6)} className="calc-btn">6</button>
                <button onClick={() => action("-")} className="calc-btn">-</button>
                <button onClick={() => appendNum(1)} className="calc-btn">1</button>
                <button onClick={() => appendNum(2)} className="calc-btn">2</button>
                <button onClick={() => appendNum(3)} className="calc-btn">3</button>
                <button onClick={() => action("%")} className="calc-btn">%</button>
                <button onClick={() => appendNum(0)} className="calc-btn zero">0</button>
                <button onClick={() => appendNum(".")} className="calc-btn">,</button>
                <button onClick={() => showResults()} className="calc-btn enter">=</button>
            </div>
        </div>
    )
}

export default Calculator