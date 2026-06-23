import React from 'react'
import {useState} from 'react'

function App() {

  const[form,setForm] = useState({
    num1:"",
    num2:""
  })
  const[calc,setCalc] = useState(0)
  const[operation,setOperation] = useState("+")
  const[error,setError] = useState({})

  const handleInput =(e) =>{
    const{name,value} = e.target;
    setForm((prev)=>({...prev,[name]:value}))
  }

  const validate = ()=>{
    let err={}

    if(!form.num1){
      err.num1 ="num1 required"
    }
    if(!form.num2){
      err.num2="num2 required"
    }
    setError(err)
    return Object.keys(err).length === 0
  }

  const handleCalculate =()=>{

    if(!validate()){
      return
    }
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
          style={{border:error.num1?"2px solid red":"1px solid black"}}
        />
        {error.num1 && <p style={{color:"red"}}>{error.num1}</p>}
      </div>
      <div>
        <label>Number 2: </label>
        <input
          placeholder="enter a number"
          type="number"
          value={form.num2}
          name="num2"
          onChange={handleInput}
          style={{border:error.num2?"2px solid red":"1px solid black"}}
        />
        {error.num2 && <p style={{color:"red"}}>{error.num2}</p>}
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