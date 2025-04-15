import React from 'react';
import FormSubmission from './components/FormSubmission';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Laravel + React Form Demo</h1>
      </header>
      <main>
        <FormSubmission />
      </main>
    </div>
  );
}

export default App;