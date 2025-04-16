import { useState } from "react"

function SinCosTan() {
    
    const [arrowDown, setArrowDown] = useState(true)

    function showFormula() {
        setArrowDown(v => !v)
        if (arrowDown) {
            document.getElementById("content-sct").classList.remove("hidden")
        }else {
            document.getElementById("content-sct").classList.add("hidden")
        }
    }

    function calculate() {
        let r = document.getElementById("sct-rad")
        let g = document.getElementById("sct-deg")

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
            <h3>Seno<span onClick={() => {showFormula()}} id="arrow-sct" className="material-symbols-outlined">{arrowDown ? "arrow_drop_down" : "arrow_drop_up"}</span></h3>
            <div className="formula-content hidden" id="content-sct">
                <strong>sin() = co/h</strong>
                <ul>
                    <li>co = cateto oposto</li>
                    <li>ca = cateto adjacente</li>
                    <li>h = hipotenusa</li>
                </ul>
                <div className="formula-calc">
                    <ul className="formula-values">
                        <li>co = <input id="sct-rad" type="number" /></li>
                        <li>ca = <input id="sct-deg" type="number" /></li>
                        <li>h = <input id="sct-deg" type="number" /></li>
                    </ul>
                    <button onClick={() => {calculate()}} className="calculate-btn">calcular</button>
                </div>
            </div>
        </div>
    )
}

export default SinCosTan