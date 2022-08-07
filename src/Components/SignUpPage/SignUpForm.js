import {Link, useNavigate} from 'react-router-dom';
import styles from './SignUpForm.module.scss' ;
import {useState} from 'react'
import Error from '../Error';
// import styles from '../LoginPage/Form.module.scss'; // Import scss from another folder

function SignUpForm() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorCpass, setErrorCpass] = useState('');

    let account = {
        firstName: name,
        email: email,
        password: pass
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        let validName = false;
        let validEmail = false;
        let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (name.length > 24 || name.length === 0) setErrorName("Name is empty or longer than 24"); 
        else {
            setErrorName("");
            validName = true
        };

        if (email.length === 0 || !email.match(mailformat)) setErrorMail("Mail is empty or wrong format"); 
        else {
            setErrorMail("");
            validEmail = true
        };
        
        pass.length === 0 ? setErrorPass("Password can't be empty") : setErrorPass("")
        cpass !== pass ? setErrorCpass("Confirm password does not match") : setErrorCpass("")

        if (pass === cpass && validName && validEmail && pass.length !== 0) {
            alert("Success")
            localStorage.setItem(email, JSON.stringify(account))
            navigate("/")
        } else {
            alert("Check again")
        }
    }


    return (
        <form className={styles.form}>
            <h1>Sign Up</h1>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="name">Full Name</label>
                <input
                    type="text" 
                    name='name' 
                    id="name"
                    value = {name}
                    onChange = {(e => setName(e.target.value))}
                />
            </div>
            <Error error={errorName}/>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="email">Email ID</label>
                <input
                    type="email"
                    name='email' 
                    id="email"
                    value = {email}
                    onChange = {(e => setEmail(e.target.value))}
                />
            </div>
            <Error error={errorMail}/>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="pass">Password</label>
                <input
                    type="password" 
                    name='password' 
                    id="pass"
                    value = {pass}
                    onChange = {(e => setPass(e.target.value))}
                />
                <span className={styles.icon}><i className='bx bx-low-vision'></i></span>
            </div>
            <Error error={errorPass}/>
            <div className={styles.row}>
                <label className={styles.form__label} htmlFor="cpass">Confirm Password</label>
                <input
                    type="password" 
                    name='cpassword' 
                    id="cpass"
                    value = {cpass}
                    onChange = {(e => setCpass(e.target.value))}
                />
                <span className={styles.icon}><i className='bx bx-low-vision'></i></span>
            </div>
            <Error error={errorCpass}/>
            <button onClick={handleSignUp}>Sign Up</button>
            <p>Already have an account ? <Link className={styles.link} to="/">Sign in now</Link></p>
        </form>
    )
}

export default SignUpForm;