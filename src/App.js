import React, {useState} from 'react';
import './App.css';

function App(){

  const name = "DarkSide Dev";
  const [idade, setIdade] = useState(18);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [show, setShow] = useState(false);

  const calc = () => {
    setShow(true);
  };

  return(

    <div className="App">

      <h2>Hey, {name} here</h2>

      <p>I'm {idade} years old</p>
      <p>Let's code</p>

      <br/>

      <input placeholder="Digite um número" onChange={e => {setNumber1(e.target.value);setShow(false);}} type="number" value={number1}/>
      <input placeholder="Digite outro número" onChange={e => {setNumber2(e.target.value);setShow(false);}} type="number" value={number2}/>
      <br/>
      <button onClick={calc}>Calculate</button>

      <br/>

      { show && (number1 != 0 || number2 != 0) &&

        <>
          <p>{number1} + {number2} = {parseFloat(number1)+parseFloat(number2)}</p>
          <p>{number1} - {number2} = {number1-number2}</p>
          <p>{number1} * {number2} = {number1*number2}</p>
          <p>{number1} / {number2} = {(number1/number2).toFixed(2)}</p>
        </>

      }



    </div>

  );

}

export default App;