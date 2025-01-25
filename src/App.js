import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [Principal , setprincipal] = useState(0)
const [roi , setROI] = useState(0)
const [tp, setTp] = useState(0)
const [si, setSI] = useState(0)

let cal = (e) => {
  e.preventDefault()
  let ans = (roi*Principal*tp)/100;
  setSI(ans);
}
let reload = () => {
  window.location.reload()
}
  return (
    <div className="App">
      <h1>Simple Interest Calculator</h1>
      <p>Calculate your simple interest Easily</p>
      <div>
        <h1>₹{si}</h1>
        <p>Simple Interest</p>
      </div>
      <form onSubmit = {cal}>
        <input type = 'number' placeholder="Principal amonunt" onChange={(e) => setprincipal(e.target.value)}></input>
        <input type = 'number' placeholder="Rate of interest (p.a)" onChange={(e) => setROI(e.target.value)}></input>
        <input type = 'number' placeholder="Time period (yr)" onChange={(e) => setTp(e.target.value)}></input>
        <div>
          <button type = 'submit' >Submit</button>
          <button onClick={reload}>Reload</button>
        </div>
      </form>

    </div>
  );
}

export default App;
