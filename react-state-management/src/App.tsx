
import React from 'react';
import NavBar from './components/Navbar';
import { DARK_THEME, LIGHT_THEME } from './constants/theme';
import { useTheme } from './context/ThemeContext';
import TaskManager from './components/TaskManager'


function App(){
   const {theme}=useTheme();
  return(
    <div style={{minHeight:'100vh',backgroundColor:theme===LIGHT_THEME?'#FFFFFF':'#242629',color:theme===LIGHT_THEME?'#000000':'#FFFFFF'}}>
    <NavBar />
    <TaskManager/>
    </div>
  )
}

export default App