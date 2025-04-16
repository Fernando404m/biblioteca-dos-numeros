import { useState } from "react"

function Radian() {
    
    const [arrowDown, setArrowDown] = useState(true)

    function showFormula() {
        setArrowDown(v => !v)
        if (arrowDown) {
            document.getElementById("content-radian").classList.remove("hidden")
        }else {
            document.getElementById("content-radian").classList.add("hidden")
        }
    }

    function calculate() {
        let r = document.getElementById("radian-rad")
        let g = document.getElementById("radian-deg")

        switch (true) {
            case r.value == "" && g.value != "":
                r.value = (g.value * (3.14159 / 180)).toFixed(4)
                break;
            case g.value == "" && r.value != "":
                g.value = (r.value * (180 / 3.14159)).toFixed(2)
                break;
            case r.value != "" && g.value != "":
                window.alert("preencha apenas 1 campo")
                break
            default:
                window.alert("preencha 1 campo")
                break;
        }
    }

    return (
        <div className="formula-container">
            <h3>Radianos<span onClick={() => {showFormula()}} id="arrow-radian" className="material-symbols-outlined">{arrowDown ? "arrow_drop_down" : "arrow_drop_up"}</span></h3>
            <div className="formula-content hidden" id="content-radian">
                <strong>R = g × (π / 180)</strong>
                <ul>
                    <li>R = radianos</li>
                    <li>g = graus</li>
                    <li>π = pi (3,14...)</li>
                </ul>
                <div className="formula-calc">
                    <ul className="formula-values">
                        <li>R = <input id="radian-rad" type="number" /></li>
                        <li>g = <input id="radian-deg" type="number" /></li>
                    </ul>
                    <button onClick={() => {calculate()}} className="calculate-btn">calcular</button>
                </div>
            </div>
        </div>
    )
}

export default Radian