import React, { createContext, useContext, useState, useEffect } from 'react';

const ColorSchemeContext = createContext();

export const useColorScheme = () => useContext(ColorSchemeContext);

export const ColorSchemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        const storedMode = localStorage.getItem('theme');
        if (storedMode) {
            setMode(storedMode);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', mode);
        document.body.style.backgroundColor = mode === 'dark' ? '#121212' : '#ffffff'; // Cambia el color de fondo según el tema
    }, [mode]);

    return (
        <ColorSchemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};