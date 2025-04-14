import '../styles/App.css'
import Counter from './Counter.jsx'
import Images from './Images.jsx'
import {useState} from "react";

function App() {
  
  const [count, setCount] = useState(0);
  //const [bestCount, setBestCount] = useState(0);
  
  return (
    <div className="container">
      <div className="header">
        <div className="headertext"></div>
        <Counter count={count} /*bestCount={bestCount} setBestCount={setBestCount}*/ />
      </div>
      <div className="images">
        <Images count={count} setCount={setCount} /*bestCount={bestCount}*/ />
      </div>
    </div>
  )
}

export default App
