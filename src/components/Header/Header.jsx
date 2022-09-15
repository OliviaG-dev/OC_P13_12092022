import './Header.css';
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

const icon = <FontAwesomeIcon icon={faCircleUser} />

const Header = () => {
    
    return(
    <nav className="header">
        <Link className="header__link" to="/">
            <img className='header__link__logo' src={logo} alt='Argent Bank Logo'/>
            <h1 className='header__link__title'>Argent Bank</h1>
        </Link>
        <Link className='header__link__icon' to="/signIn">
            <div className='link__icon__img'>{icon}</div>
            <p>Sign In</p>
        </Link>
    </nav>
    )
}


export default Header