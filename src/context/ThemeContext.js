import React, { createContext, useState } from 'react';
//const ThemeContext =  createContext( )
//export default ThemeContext

const DarkModeContext = createContext();

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = (dark) => {
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
};

export { DarkModeContext, DarkModeProvider };