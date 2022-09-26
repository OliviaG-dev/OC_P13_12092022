import './Header.css';
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { logout, userSelector } from '../../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const icon = <FontAwesomeIcon icon={faCircleUser} />
const iconSignOut = <FontAwesomeIcon icon={faSignOut} />

const Header = () => {
    const user = useSelector(userSelector)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    
    return(
    <nav className="header">
        <Link className="header__link" to="/">
            <img className='header__link__logo' src={logo} alt='Argent Bank Logo'/>
            <h1 className='hide__only'>Argent Bank</h1>
        </Link>

        {!user.token && ( 
            <Link className='header__link__login' to="/login">
                <div className='link__icon__img'>{icon}</div>
                <p>Sign In</p>
            </Link>
        )}

        {user.token && ( 
            <div className='header__link__sign'>
            <Link className='header__link__signInOut' to="/profile">
                <div className='link__icon__img'>{icon}</div>
                <p>{user.firstName}</p>
            </Link>

            <Link className='header__link__signOut' to="/" onClick={handleLogout}>
                <div className='link__icon__img'>{iconSignOut}</div>
                <p>Sign Out</p>
            </Link>
            </div>
        )}
    </nav>
    )
}


export default Header