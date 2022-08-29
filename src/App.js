import React  from 'react';
import './App.css';
import Container from './components/Container';
import { DarkModeProvider  } from './context/ThemeContext';


function App() {
  return (
    <div className="App">
       <DarkModeProvider>
        <Container/>
       </DarkModeProvider>
    
     </div>
  );
}

export default App;
