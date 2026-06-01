import React from 'react'
import {useState} from 'react'

function App() {

  const[form,setForm] = useState({
    num1:"",
    num2:""
  })
  const[calc,setCalc] = useState(0)
  const[operation,setOperation] = useState("+")

  const handleInput =(e) =>{
    const{name,value} = e.target;
    setForm((prev)=>({...prev,[name]:value}))
  }

  const handleCalculate =()=>{
    const n1 = Number(form.num1)
    const n2 = Number(form.num2)

    switch (operation){
      case "+":
        setCalc(n1+n2)
        break
      case "-":
        setCalc(n1-n2)
        break
      case "*":
        setCalc(n1*n2)
        break
      case "/":
        setCalc(n1/n2)
        break
    }
  }

  const handleChange =(e)=>{
    setOperation(e.target.value)
  }

  return (
    <div>
      <h1>Calculator</h1>

          <div>
        <label>Number 1: </label>
        <input
          placeholder="enter a number"
          type="number"
          value={form.num1}
          name="num1"
          onChange={handleInput}
        />
      </div>
      <div>
        <label>Number 2: </label>
        <input
          placeholder="enter a number"
          type="number"
          value={form.num2}
          name="num2"
          onChange={handleInput}
        />

        <select onChange={handleChange} value={operation}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <h1>{calc}</h1>

    </div>
  )
}

export default App