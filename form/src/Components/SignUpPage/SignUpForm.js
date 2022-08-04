import {Link} from 'react-router-dom';
import styles from './SignUpForm.module.scss' ;
// import styles from '../LoginPage/Form.module.scss'; // Import scss from another folder

function SignUpForm() {
    return (
        <form>
            <h1>Sign Up</h1>
            <div className={styles.form}>
                <label className={styles.form__label} htmlFor="name">Full Name</label>
                <input type="text" name='name' id="name"/>
            </div>
            <div className={styles.form}>
                <label className={styles.form__label} htmlFor="email">Email ID</label>
                <input type="email" name='email' id="email"/>
            </div>
            <div className={styles.form}>
                <label className={styles.form__label} htmlFor="pass">Password</label>
                <input type="password" name='password' id="pass"/>
                <span className={styles.icon}><i className='bx bx-low-vision'></i></span>
            </div>
            <div className={styles.form}>
                <label className={styles.form__label} htmlFor="cpass">Confirm Password</label>
                <input type="password" name='cpassword' id="cpass"/>
                <span className={styles.icon}><i className='bx bx-low-vision'></i></span>
            </div>
            <button>Sign Up</button>
            <p>Already have an account ? <Link className={styles.link} to="/Home">Sign in now</Link></p>
        </form>
    )
}

export default SignUpForm;