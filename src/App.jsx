import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`main-container ${darkMode && "dark"}`}>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} isOpen={isOpen} />
    </div >
  )
}

export default App
