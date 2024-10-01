import './App.css'
import { useState } from 'react'
import Calculator from './calculator/calculator'

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
  let trigonometria = []
  let probabilidade = []

  return (
    <>
      <div className='main-container'>
        <div>
          <section className='trigonometria'>
            {trigonometria}
          </section>
          <section className='probabilidade'>
            {probabilidade}
          </section>
        </div>
      </div>
      <button id="open-calc" className="material-symbols-outlined" onClick={() => showCalc()}>{icon}</button>
      {isCalcOpen ? calculator : ""}
    </>
    
  )
}

export default App
