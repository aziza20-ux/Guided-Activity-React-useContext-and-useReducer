
import React from 'react';
import NavBar from './components/Navbar';
import { DARK_THEME, LIGHT_THEME } from './constants/theme';
import { useTheme } from './context/ThemeContext';


function App(){
   const {theme}=useTheme();
  return(
    <div style={{backgroundColor:theme===LIGHT_THEME?'#FFFFFF':'#242629',color:theme===LIGHT_THEME?'#000000':'#FFFFFF',Button:theme===LIGHT_THEME?'#1E90FF':'#85D1B0'}}>
    <NavBar />
    </div>
  )
}

export default App