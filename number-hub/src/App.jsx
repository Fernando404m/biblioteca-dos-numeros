import './App.css'
import { useState } from 'react'
import Calculator from './calculator/calculator'
import SimpleInte from './financial_ed/simple_interest'
import CompoundInte from './financial_ed/comp_interest'
import Rule72 from './financial_ed/rule_72'

function App() {

  // calculator
  let [isCalcOpen, switchCalcOpen] = useState(false)
  let [icon, switchIcon] = useState("calculate")

  function showCalc() {
    if (!isCalcOpen) {
      switchIcon("close")
    } else {
      switchIcon("calculate")
    }
    switchCalcOpen(v => !v)
  }

  let calculator = <Calculator />


  // other
  let edFinanceira = [<SimpleInte />, <CompoundInte />, <Rule72 />]
  let trigonometry = []
  let probability = []

  return (
    <>
      <div className='main-container'>
        <div>
          <section className='financial-ed top-formula-containers'>
            <h2>educação financeira</h2>
            {edFinanceira}
          </section>
          <section className='trigonometry top-formula-containers'>
            {trigonometry}
          </section>
          <section className='probability top-formula-containers'>
            {probability}
          </section>
        </div>
      </div>
      <button id="open-calc" className="material-symbols-outlined" onClick={() => showCalc()}>{icon}</button>
      {isCalcOpen ? calculator : ""}
    </>
    
  )
}

export default App
