import { useState } from "react"

function CompInteRegContr() {
    
    const [arrowDown, setArrowDown] = useState(true)

    function showFormula() {
        setArrowDown(v => !v)
        if (arrowDown) {
            document.getElementById("content-comp-inte-reg-contr").classList.remove("hidden")
        }else {
            document.getElementById("content-comp-inte-reg-contr").classList.add("hidden")
        }
    }

    function calculate() {
        let m = document.getElementById("comp-inte-reg-contr-amount")
        let a = document.getElementById("comp-inte-reg-contr-aport")
        let c = document.getElementById("comp-inte-reg-contr-capital")
        let i = document.getElementById("comp-inte-reg-contr-rate")
        let t = document.getElementById("comp-inte-reg-contr-time")

        switch (true) {
            case a.value == "" && c.value != "" && i.value != "" && t.value != "" && m.value != "":
                a.value = ((m.value - (c.value * (1 + i.value / 100) ** t.value)) /
                        (((1 + i.value / 100) ** t.value - 1) / (i.value / 100))).toFixed(2)
                break;
            case c.value == "" && a.value != "" && i.value != "" && t.value != "" && m.value != "":
                c.value = ((m.value - a.value * ((1 + i.value / 100) ** t.value - 1) / 
                        (i.value / 100)) / (1 + i.value / 100) ** t.value).toFixed(2);
                break;
            case i.value == "" && c.value != "" && a.value != "" && t.value != "" && m.value != "":
                window.alert("é potencialmente dificil calcular o juros")
                break;
            case t.value == "" && c.value != "" && i.value != "" && a.value != "" && m.value != "":
                window.alert("é potencialmente dificil calcular o tempo")
                break;
            case m.value == "" && t.value != "" && c.value != "" && i.value != "" && a.value != "":
                m.value = ((c.value * (1 + (i.value / 100)) ** t.value) +
                        (a.value * ((((1 + i.value / 100) ** t.value) - 1) / (i.value / 100)))).toFixed(2)
                break;
            case t.value != "" && c.value != "" && i.value != "" && a.value != "" && m.value != "":
                window.alert("preencha apenas 4 campos")
                break;
            default:
                window.alert("preencha 4 campos")
                break;
        }
    }

    return (
        <div className="formula-container">
            <h3>Compound interest with regular contributions<span onClick={() => {showFormula()}} id="arrow-comp-inte-reg-contr" className="material-symbols-outlined">{arrowDown ? "arrow_drop_down" : "arrow_drop_up"}</span></h3>
            <div className="formula-content hidden" id="content-comp-inte-reg-contr">
                <strong>M = P × (1 + i)^t <br/> + <br/> A × (((1+i)^t − 1) / i)</strong>
                <ul>
                    <li>M = Montante final</li>
                    <li>C = Capital inicial</li>
                    <li>A = Aporte mensal</li>
                    <li>i = Taxa de juros ao mes</li>
                    <li>t = Tempo (meses)</li>
                </ul>
                <div className="formula-calc">
                    <ul className="formula-values">
                        <li>m = <input id="comp-inte-reg-contr-amount" type="number" /></li>
                        <li>a = <input id="comp-inte-reg-contr-aport" type="number" /></li>
                        <li>c = <input id="comp-inte-reg-contr-capital" type="number" /></li>
                        <li>i = <input id="comp-inte-reg-contr-rate" type="number" /><span className="porcent-sign">%</span></li>
                        <li>t = <input id="comp-inte-reg-contr-time" type="number" /></li>
                    </ul>
                    <button onClick={() => {calculate()}} className="calculate-btn">calcular</button>
                </div>
            </div>
        </div>
    )
}
export default CompInteRegContr