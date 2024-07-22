import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';

import './index.css'

const Header = () => {
    return(
        <nav className='header-container'>
            <div className='logo-title-container'>
            <FontAwesomeIcon icon={faBoxesStacked } size="2x" color="#ffffff" />
                <p className='logo-title'>Indigo4.com</p>
            </div>
            <ul className='nav-items-list'>
                <li className='nav-item'>CAREERS</li>
                <li className='nav-item'>RESOURCES</li>
                <li className='nav-item'>PROGRAMS</li>
                <li className='nav-item'>NEWS UPDATES</li>
            </ul>
            <div className='login-signup-container'>
                <FontAwesomeIcon icon={faUser} className='user-icon'/>
                <p className='login-signup-title'>Login in/Sign up</p>
            </div>
        </nav>
    )
}

export default Header