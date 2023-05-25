import React,{ useState } from "react";
import './App.css';


function App() {
  const [alpha,setAlpha] = useState('h');
  const [Accuracy,setAccuracy] = useState(0)
  const [key,setKey] = useState(0)
  const [msg,setMsg] = useState('');
  const char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const handlechng=e=>{
    setMsg(msg.slice(0, key));
    setMsg(e.target.value);
    setKey(key+1);
    setAlpha(char[Math.floor(Math.random()*26)]);
    // setAccuracy(Math.floor(Math.random()*99));
    if(msg===alpha){
      setAccuracy(100);
    }
    else{
      setAccuracy(Math.floor(Math.random()*70));
    }
    console.log(msg);
  };


  return (
    <>
    <div className="container">
      <h1 className="heading">Typing Practice</h1>
      <div className="form-container">
        <p className="alphabet">Text to Type: "{alpha}"</p>
        <div className="input-container">
          <input type="text" onChange={handlechng} placeholder="Eneter Alphabets"/>
        </div>
        <p className="key">Number of Keys Pressed: "{key}"</p>
        <p className="accuracy">Accuracy: "{Accuracy}%"</p>
      </div>
    </div>
    </>
  );
}

export default App;
