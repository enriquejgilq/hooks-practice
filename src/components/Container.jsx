import React, { useContext } from 'react';
import Header from './Header';
import Characters from './Characters';
import {DarkModeContext} from "../context/ThemeContext";

const Container = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? 'Container Container-dark' : 'Container Container-light'}>
            <Header />
            <Characters />
        </div>
    )
}

export default Container