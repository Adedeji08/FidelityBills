/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 07/06/2022 - 14:46:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/06/2022
    * - Author          : 
    * - Modification    : 
**/
import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/UseAuth.js';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/Axios';
import './Login.scss'

const LOGIN_URL = '/auth';

const Register = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
            <div className='login-div'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className='welcome-name'>Welcome Wande</h1>
            <p className='welcome-text'>Nice to have you back. Logn in to continue to<br/>
               manage your finance</p>
            <form onSubmit={handleSubmit}>
                <div className='email-group'>
                <input
                    type="email"
                    id="username"
                    className="user"
                    ref={userRef}
                    placeholder='akinwandekomolafe@gmail.com'
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <span className='vector'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10C11.3261 10 12.5979 9.47322 13.5355 8.53553C14.4732 7.59785 15 6.32608 15 5C15 3.67392 14.4732 2.40215 13.5355 1.46447C12.5979 0.526784 11.3261 0 10 0C8.67392 0 7.40215 0.526784 6.46447 1.46447C5.52678 2.40215 5 3.67392 5 5C5 6.32608 5.52678 7.59785 6.46447 8.53553C7.40215 9.47322 8.67392 10 10 10ZM13.3333 5C13.3333 5.88405 12.9821 6.7319 12.357 7.35702C11.7319 7.98214 10.8841 8.33333 10 8.33333C9.11594 8.33333 8.2681 7.98214 7.64298 7.35702C7.01786 6.7319 6.66667 5.88405 6.66667 5C6.66667 4.11594 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667C10.8841 1.66667 11.7319 2.01786 12.357 2.64298C12.9821 3.2681 13.3333 4.11594 13.3333 5ZM20 18.3333C20 20 18.3333 20 18.3333 20H1.66667C1.66667 20 0 20 0 18.3333C0 16.6667 1.66667 11.6667 10 11.6667C18.3333 11.6667 20 16.6667 20 18.3333ZM18.3333 18.3267C18.3317 17.9167 18.0767 16.6833 16.9467 15.5533C15.86 14.4667 13.815 13.3333 10 13.3333C6.18333 13.3333 4.14 14.4667 3.05333 15.5533C1.92333 16.6833 1.67 17.9167 1.66667 18.3267H18.3333Z" fill="#8F75FF"/>
                </svg>

                </span>
                </div>
                <div className='email-password'>
                <input
                   className="user"
                    type="password"
                    id="username"
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder='Password'
                    value={pwd}
                    required
                />
                <span className='vector'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.125 1.25C12.2466 1.2498 11.3804 1.45535 10.5958 1.85019C9.81115 2.24503 9.12991 2.81818 8.60666 3.5237C8.08342 4.22922 7.73271 5.0475 7.58264 5.91296C7.43257 6.77842 7.48732 7.66701 7.7425 8.5075L1.25 15V18.75H5L11.4925 12.2575C12.2662 12.4923 13.0814 12.5576 13.8826 12.4489C14.6838 12.3402 15.4522 12.06 16.1353 11.6275C16.8184 11.195 17.4003 10.6203 17.8412 9.94256C18.2822 9.26483 18.5718 8.5 18.6904 7.70021C18.8091 6.90041 18.7539 6.08444 18.5286 5.3079C18.3033 4.53137 17.9133 3.81252 17.3851 3.20035C16.8569 2.58818 16.203 2.09708 15.4678 1.76051C14.7326 1.42394 13.9335 1.24981 13.125 1.25ZM13.125 11.25C12.6947 11.2498 12.2668 11.1862 11.855 11.0612L11.1381 10.8438L10.6088 11.3731L8.62063 13.3612L7.75875 12.5L6.875 13.3837L7.73687 14.2456L6.74563 15.2369L5.88375 14.375L5 15.2587L5.86187 16.1206L4.4825 17.5H2.5V15.5175L8.62625 9.39125L9.15625 8.86188L8.93875 8.145C8.67161 7.26437 8.68897 6.32193 8.98834 5.45173C9.28772 4.58153 9.85388 3.82789 10.6063 3.29802C11.3587 2.76814 12.259 2.48901 13.1792 2.50033C14.0994 2.51165 14.9926 2.81285 15.7317 3.36107C16.4708 3.9093 17.0183 4.67664 17.2961 5.55394C17.574 6.43124 17.5682 7.37382 17.2795 8.24761C16.9907 9.12141 16.4338 9.88191 15.688 10.4209C14.9421 10.96 14.0453 11.2501 13.125 11.25Z" fill="#8F75FF"/>
                        <path d="M13.75 7.5C14.4404 7.5 15 6.94036 15 6.25C15 5.55964 14.4404 5 13.75 5C13.0596 5 12.5 5.55964 12.5 6.25C12.5 6.94036 13.0596 7.5 13.75 7.5Z" fill="#8F75FF"/>
               </svg>

                </span>
                </div>
                <button className='btn'>Login</button>
            </form>
            <div className='links'>
            <p>
                    <Link className='help' to="/register">Sign Up</Link>
            </p>

            <p >
                    <Link className='help' to="#/">Forgot Password</Link>
            </p>

            <p >
                    <Link className='help' to="#/">Get Help</Link>
            </p>
            </div>

            </div>
        </section>

    )
}

export default Register