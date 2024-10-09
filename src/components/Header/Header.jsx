import { FaSun, FaMoon, FaUser } from "react-icons/fa";
import './Header.css'

export default function Header({ toggleDarkMode, darkMode }) {
    return (
        <div className="header_container">
            <h1>Dashboard</h1>
            <div className="right_header">
                <button onClick={toggleDarkMode}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                <div className="user_profile">
                    <FaUser />
                    <h2>John Doe</h2>
                </div>
            </div>
        </div >
    )
}