import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import styles from './Form.module.scss';
import Error from '../Error';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorName, setNameError] = useState('');
    const [errorPass, setPassError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let account = JSON.parse(localStorage.getItem(email))
        email.length === 0 ? setNameError("Name cant be empty") : setNameError("")
        pass.length === 0 ? setPassError("Pass cant be empty") : setPassError("")
        if (email === account.email && pass === account.password) {
            alert("Login in success, redirecting to Home page");
            localStorage.setItem("isLogin", "true");
            navigate('/home');
            console.log(email)
        } else alert("Wrong email or password")
    }

    

    return (
        <form className={styles.form}>
            <h1>Login</h1>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="email">Email ID</label>
                <input 
                    type="email" 
                    name='email' 
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <Error error={errorName}/>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    name='password' 
                    id="pass"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
                <span className={styles.icon}><i className='bx bx-low-vision'></i></span>
            </div>
            <Error error={errorPass}/>
            <button onClick={handleLogin}>Log In</button>
            <p>Don't have an account ? <Link className={styles.link} to="/signup">Create new</Link></p>
        </form>
    )
}

export default LoginForm;