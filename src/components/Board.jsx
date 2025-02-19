import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';
// import UsernameInput from './UsernameInput';

function Board({birthday, setBirthday}) {

    const { theme, setTheme } = useContext(ThemeContext);

    function handleClick() {
        setTheme(currentTheme => {
            return currentTheme === 'light' ? 'dark':'light';
        })
    }

    function handleBirthday() {
        setBirthday(birthday => !birthday)
    }

    const [gameName, setGameName] = useState('DURIAN')

    useEffect(() => {
        if (theme === 'light' && !birthday) {
            setGameName('DURIAN')
        } else if (theme === 'light' && birthday) {
            setGameName('Happy Birthday!')
        } else if (theme === 'dark' && !birthday) {
            setGameName('Happy Valentine!')
        } else {
            setGameName('Happy Maram-tine!!')
        }
        // setGameName(theme === 'dark' ? 'Happy Valentines!' : 'DURIAN')
    }, [theme, birthday])

    return (
    <>
    <label className="switch">
        <input type="checkbox" onClick={handleClick}/>
        <span className="slider round"></span>
    </label>
    <h2></h2>
    <label className="switch">
        <input type="checkbox" onClick={handleBirthday}/>
        <span className="slider round"></span>
    </label>
    <h1 className={theme}>{gameName}</h1>
    </>
    )
}

export default Board;