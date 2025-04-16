import { useState } from "react"

function CompoundInte() {
    
    const [arrowDown, setArrowDown] = useState(true)

    function showFormula() {
        setArrowDown(v => !v)
        if (arrowDown) {
            document.getElementById("content-comp-inte").classList.remove("hidden")
        }else {
            document.getElementById("content-comp-inte").classList.add("hidden")
        }
    }

    function calculate() {
        let m = document.getElementById("comp-inte-amount")
        let c = document.getElementById("comp-inte-capital")
        let i = document.getElementById("comp-inte-rate")
        let t = document.getElementById("comp-inte-time")

        switch (true) {
            case m.value == "" && c.value != "" && i.value != "" && t.value != "":
                m.value = (c.value * (1 + (i.value / 100)) ** t.value).toFixed(2)
                break;
            case c.value == "" && m.value != "" && i.value != "" && t.value != "":
                c.value = (m.value / ((1 + (i.value / 100)) ** t.value)).toFixed(2)
                break;
            case i.value == "" && c.value != "" && m.value != "" && t.value != "":
                i.value = (((m.value / c.value) ** (1 / t.value) - 1) * 100).toFixed(2)
                break;
            case t.value == "" && c.value != "" && i.value != "" && m.value != "":
                t.value = (Math.log(m.value / c.value) / Math.log( 1 + i.value / 100)).toFixed(2)
                break;
            case t.value != "" && c.value != "" && i.value != "" && m.value != "":
                window.alert("preencha apenas 3 campos")
                break
            default:
                window.alert("preencha 3 campos")
                break;
        }
    }

    return (
        <div className="formula-container">
            <h3>Juros compostos<span onClick={() => {showFormula()}} id="arrow-comp-inte" className="material-symbols-outlined">{arrowDown ? "arrow_drop_down" : "arrow_drop_up"}</span></h3>
            <div className="formula-content hidden" id="content-comp-inte">
                <strong>M = c × (1 + i)^t</strong>
                <ul>
                    <li>M = Montante (capital + juros)</li>
                    <li>P = Valor principal (capital)</li>
                    <li>i = Taxa de juros ao mes</li>
                    <li>t = Tempo (meses)</li>
                </ul>
                <div className="formula-calc">
                    <ul className="formula-values">
                        <li>M = <input id="comp-inte-amount" type="number" /></li>
                        <li>p = <input id="comp-inte-capital" type="number" /></li>
                        <li>i = <input id="comp-inte-rate" type="number" /><span className="porcent-sign">%</span></li>
                        <li>t = <input id="comp-inte-time" type="number" /></li>
                    </ul>
                    <button onClick={() => {calculate()}} className="calculate-btn">calcular</button>
                </div>
            </div>
        </div>
    )
}

export default CompoundInte