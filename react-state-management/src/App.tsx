
import React from 'react';
import NavBar from './components/Navbar';
import { DARK_THEME, LIGHT_THEME } from './constants/theme';
import { useTheme } from './context/ThemeContext';


function App(){
   const {theme}=useTheme();
  return(
    <div style={{backgroundColor:theme===LIGHT_THEME?'#FFFFFF':'#242629',color:theme===LIGHT_THEME?'#000000':'#FFFFFF'}}>
    <NavBar />
    </div>
  )
}

export default App