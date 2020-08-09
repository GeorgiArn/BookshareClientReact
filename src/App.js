import React from 'react';
import './bootstrap.css';
import Navigation from './components/navigation';
import Homepage from './components/homepage';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Homepage/>
    </div>
  );
}

export default App;
