import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from '../App';
// import UsernameInput from './UsernameInput';

function Board() {

    const { theme, setTheme } = useContext(ThemeContext);

    function handleClick() {
        setTheme(currentTheme => {
            return currentTheme === 'light' ? 'dark':'light';
        })
    }

    return (
    <>
    <label className="switch">
        <input type="checkbox" onClick={handleClick}/>
        <span className="slider round"></span>
    </label>
    <h1 className={theme}>DURIAN</h1>
    </>
    )
}

export default Board;