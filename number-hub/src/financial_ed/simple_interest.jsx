import { useState } from "react"

function SimpleInte() {
    
    const [arrowDown, setArrowDown] = useState(true)

    function showFormula() {
        setArrowDown(v => !v)
        if (arrowDown) {
            document.getElementById("content-simp-inte").classList.remove("hidden")
        }else {
            document.getElementById("content-simp-inte").classList.add("hidden")
        }
    }

    function calculate() {
        let j = document.getElementById("simp-inte-interest")
        let c = document.getElementById("simp-inte-capital")
        let i = document.getElementById("simp-inte-rate")
        let t = document.getElementById("simp-inte-time")

        switch (true) {
            case j.value == "" && c.value != "" && i.value != "" && t.value != "":
                j.value = (c.value * (i.value / 100) * t.value).toFixed(2)
                break;
            case c.value == "" && j.value != "" && i.value != "" && t.value != "":
                c.value = (j.value / ((i.value / 100) * t.value)).toFixed(2)
                break;
            case i.value == "" && c.value != "" && j.value != "" && t.value != "":
                i.value = (j.value / (c.value * t.value) * 100).toFixed(2)
                break;
            case t.value == "" && c.value != "" && i.value != "" && j.value != "":
                t.value = (j.value / (c.value * (i.value / 100)))
                break;
            case t.value != "" && c.value != "" && i.value != "" && j.value != "":
                window.alert("preencha apenas 3 campos")
                break
            default:
                window.alert("preencha 3 campos")
                break;
        }
    }

    return (
        <div className="formula-container">
            <h3>juros simples<span onClick={() => {showFormula()}} id="arrow-simp-inte" className="material-symbols-outlined">{arrowDown ? "arrow_drop_down" : "arrow_drop_up"}</span></h3>
            <div className="formula-content hidden" id="content-simp-inte">
                <strong>J = c × i × t</strong>
                <ul>
                    <li>J = Juros</li>
                    <li>c = Valor principal (capital)</li>
                    <li>i = Taxa de juros ao mes</li>
                    <li>t = Tempo (meses)</li>
                </ul>
                <div className="formula-calc">
                    <ul className="formula-values">
                        <li>J = <input id="simp-inte-interest" type="number" /></li>
                        <li>c = <input id="simp-inte-capital" type="number" /></li>
                        <li>i = <input id="simp-inte-rate" type="number" /><span className="porcent-sign">%</span></li>
                        <li>t = <input id="simp-inte-time" type="number" /></li>
                    </ul>
                    <button onClick={() => {calculate()}} className="calculate-btn">calcular</button>
                </div>
            </div>
        </div>
    )
}

export default SimpleInte