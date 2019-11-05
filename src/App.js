import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.jsx'
import Button2 from './button2.jsx'
import Button3 from './button3.jsx'
import Button4 from './button4.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Button2 />
        <div className="on-off-buttons">
          <Button3 />
          <Button4 />
          </div>
      </header>
    </div>
  );
}

export default App;
