import { useState } from "react"

function Pythagorean() {
    
    const [arrowDown, setArrowDown] = useState(true)

    function showFormula() {
        setArrowDown(v => !v)
        if (arrowDown) {
            document.getElementById("content-pythag").classList.remove("hidden")
        }else {
            document.getElementById("content-pythag").classList.add("hidden")
        }
    }

    function calculate() {
        let h = document.getElementById("pythag-hipot")
        let c1 = document.getElementById("pythag-cateto1")
        let c2 = document.getElementById("pythag-cateto2")

        switch (true) {
            case h.value == "" && c1.value != "" && c2.value != "":
                h.value = (((c1.value ** 2) + (c2.value ** 2)) ** (1/2)).toFixed(2)
                break;
            case c1.value == "" && h.value != "" && c2.value != "":
                c1.value = (((h.value ** 2) - (c2.value ** 2)) ** (1/2)).toFixed(2)
                break;
            case c2.value == "" && c1.value != "" && h.value != "":
                c2.value = (((h.value ** 2) - (c1.value ** 2)) ** (1/2)).toFixed(2)
                break;
            case h.value != "" && c1.value != "" && c2.value != "":
                window.alert("preencha apenas 2 campos")
                break
            default:
                window.alert("preencha 2 campos")
                break;
        }
    }

    return (
        <div className="formula-container">
            <h3>teorema de pitagoras<span onClick={() => {showFormula()}} id="arrow-pythag" className="material-symbols-outlined">{arrowDown ? "arrow_drop_down" : "arrow_drop_up"}</span></h3>
            <div className="formula-content hidden" id="content-pythag">
                <strong>H^2 = c1^2 × c2^2</strong>
                <ul>
                    <li>H = hipotenusa</li>
                    <li>c1 = primeiro cateto</li>
                    <li>c2 = segundo cateto</li>
                </ul>
                <div className="formula-calc">
                    <ul className="formula-values">
                        <li>H = <input id="pythag-hipot" type="number" /></li>
                        <li>c1 = <input id="pythag-cateto1" type="number" /></li>
                        <li>c2 = <input id="pythag-cateto2" type="number" /></li>
                    </ul>
                    <button onClick={() => {calculate()}} className="calculate-btn">calcular</button>
                </div>
            </div>
        </div>
    )
}

export default Pythagorean