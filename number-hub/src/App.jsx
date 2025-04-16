import './App.css'
import { useState } from 'react'

import Calculator from './calculator/calculator'

import SimpleInte from './financial_ed/simple_interest'
import CompoundInte from './financial_ed/comp_interest'
import CompInteRegContr from './financial_ed/Comp_interest_regular_contr'
import Rule72 from './financial_ed/rule_72'

import Pythagorean from './trigonometry/pythagorean'
import Radian from './trigonometry/radian'
import SinCosTan from './trigonometry/sincostan'

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
  let edFinanceira = [<SimpleInte key={"simpleinte"}/>, <CompoundInte key={"compoundinte"}/>, <Rule72 key={"rule72"}/>, <CompInteRegContr key={"compinteregcontr"}/>]
  let trigonometry = [<Pythagorean key={"pythagorean"}/>, <Radian key={"radian"}/>, <SinCosTan key={"sincostan"}/>]
  let probability = []

  return (
    <>
      <div className='main-container'>
        <section className='introduction'>
          <h1>Introdução</h1>
          <p>Numbers-hub é um projeto que armazena equações e formulas, para ajudar o usuario a entender e/ou obter resultados praticos e simplificados.</p>
        </section>
        <div>
          <section className='trigonometry top-formula-containers'>
            <h2>Trigonometria</h2>
            {trigonometry}
          </section>
          <section className='financial-ed top-formula-containers'>
            <h2>Educação financeira</h2>
            {edFinanceira}
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
