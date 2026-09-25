import React,{createContext, useContext,useState} from 'react';
import type {ReactNode} from 'react';
import {LIGHT_THEME,DARK_THEME} from '../constants/theme'

type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

interface ThemeContextType{
    theme:Theme;
    toggleTheme:()=>void;
}