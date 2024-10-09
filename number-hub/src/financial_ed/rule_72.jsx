import { useState } from "react"

function Rule72() {
    
    const [arrowDown, setArrowDown] = useState(true)

    function showFormula() {
        setArrowDown(v => !v)
        if (arrowDown) {
            document.getElementById("content-r72").classList.remove("hidden")
        }else {
            document.getElementById("content-r72").classList.add("hidden")
        }
    }

    function calculate() {
        let i = document.getElementById("r72-rate")
        let t = document.getElementById("r72-time")

        switch (true) {
            case i.value == "" && t.value != "":
                i.value = ((72 / t.value)).toFixed(2)
                break;
            case t.value == "" && i.value != "":
                t.value = (72 / (i.value)).toFixed(2)
                break;
            case t.value != "" && i.value != "":
                window.alert("preencha apenas 1 campos")
                break;
            default:
                window.alert("preencha 1 campos")
                break;
        }
    }

    return (
        <div className="formula-container">
            <h3>regra dos 72<span onClick={() => {showFormula()}} id="arrow-r72" className="material-symbols-outlined">{arrowDown ? "arrow_drop_down" : "arrow_drop_up"}</span></h3>
            <div className="formula-content hidden" id="content-r72">
                <strong>t = 72 / i</strong>
                <ul>
                    <li>t = Tempo necessário para o investimento dobrar</li>
                    <li>i = Taxa de juros (em porcentagem, não em decimal)</li>
                </ul>
                <div className="formula-calc">
                    <ul className="formula-values">
                        <li>t = <input id="r72-time" type="number" /></li>
                        <li>i = <input id="r72-rate" type="number" /><span className="porcent-sign">%</span></li>
                    </ul>
                    <button onClick={() => {calculate()}} className="calculate-btn">calcular</button>
                </div>
            </div>
        </div>
    )
}

export default Rule72