import logo from './logo.svg';
import  { MyComponent } from './components/MyComponent';
import { Secondcomponent } from './components/Secondcomponent';
import { TrirdComponent } from './components/TrirdComponent';
import { Child } from './components/Child';
import { FourthComponent } from './components/FourthComponent';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("jeferson");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  const medicalRecord = {
    height:"160"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <FourthComponent/>
        <Child name={name} setName={setName} addMessage={addMessage}/>
        <MyComponent />
        <Secondcomponent/>
        <TrirdComponent
        name="jefrson"
        lastname="nuñez" 
        card={medicalRecord}
        />
      </header>
    </div>
  );
}

export default App;
