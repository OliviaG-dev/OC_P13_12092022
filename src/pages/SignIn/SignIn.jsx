import './SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {
    
    
    return  (
            <>
            <main className='main bg__dark'>
                <section className='signin'>
                {<FontAwesomeIcon icon={faCircleUser} className='signin__icon'/>}
                <h1>Sign In</h1>
                <from>
                    <div className='signin__wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input id='username' type='text'></input>
                    </div>
                    <div className='signin__wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password'></input>
                    </div>
                    <div className='signin__remember'>
                        <input id='remember-me' type='checkbox'></input>
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <button className='signin__submit'>Sign In</button>
                </from>
                </section>
            </main>
            </>
            )
}


export default SignIn