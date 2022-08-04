import {Link} from 'react-router-dom'
import styles from './Form.module.scss'

function LoginForm() {
    return (
        <form className={styles.form}>
            <h1>Login</h1>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="email">Email ID</label>
                <input type="email" name='email' id="email"/>
            </div>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="pass">Password</label>
                <input type="password" name='password' id="pass"/>
                <span className={styles.icon}><i className='bx bx-low-vision'></i></span>
            </div>
            <button>Log In</button>
            <p>Don't have an account ? <Link className={styles.link} to="/SignUp">Create new</Link></p>
        </form>
    )
}

export default LoginForm;