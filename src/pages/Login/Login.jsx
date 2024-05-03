import { useState } from 'react';
import "../../styles/login.css"
import Swal from 'sweetalert2';
import {  auth} from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Login(params) {

    const [isLogin, setLogin] = useState(true);
    const [type, setType] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    const [name, setName] = useState();

    const toggleLogin = () => {
        setLogin((prev) => !prev);
    };

    //check password and conferm password
    const chechpassword = (value) => {
        setCpassword(value)
        if (password != value) {
            setType(false)
        } else {
            setType(true)
        }
    }

    //user signin
    const handlelogin = async () => {
        if (isLogin) {
            console.log("hi")
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await console.log(user.email)
                if (user) {
                    window.location.href = "/home";
                }
                else {
                    Swal.fire('Error', 'login error', 'error');
                }


            } catch (error) {
                console.error('Error signing in:', error);
                Swal.fire('Error', 'login error', 'error');
            }
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                if (user) {
                    Swal.fire('Success', 'user add successfully', 'success');
                    await sessionStorage.setItem("user", email);
                    window.location.href = "/home";
                }
                else {
                    Swal.fire('Error', 'Error signing up', 'error');
                    
                }

            } catch (error) {
                Swal.fire('Error', 'email is already used', 'error');
                console.error('Error signing up:', error);
            }
        }


    }
    return (
        <div className='login pt-5'>
            <div className=" card text-bg-dark mx-auto " style={{ width: '30rem', opacity: "0.9" }}>
                <div className="card-body">

                    <h2 className='mb-4'>{isLogin ? 'Login' : 'Sign Up'}</h2>
                  
                        {!isLogin && (
                            <div className="pt-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" required={true} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => (setName(e.target.value))} />

                            </div>
                        )}
                        <div className="pt-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" required={true} className="form-control" id="exampleInputEmail1" onChange={(e) => (setEmail(e.target.value))} aria-describedby="emailHelp" />

                        </div>
                        <div className="pt-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" required={true} className="form-control" onChange={(e) => (setPassword(e.target.value))} id="exampleInputPassword1" />
                            {/* pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,10}" */}
                        </div>
                        {!isLogin && (
                            <div className="pt-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"> conferm Password</label>
                                <input type="password" onChange={(e) => (chechpassword(e.target.value))} required={true} className="form-control" id="exampleInputPassword1" />
                                <div id="form-text" hidden={type} className="text-danger">password is not match.</div>
                            </div>
                        )}
                        <br />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                            <button onClick={handlelogin} className="btn btn-primary ps-4 pe-4"  >{isLogin ? 'Login' : 'Sign Up'}</button>
                        </div>

                    <label className="form-check-label mt-2 mb-4" htmlFor="exampleCheck1">
                        {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
                        <a href="#" onClick={toggleLogin} className="card-link"> {isLogin ? 'Sign Up' : 'Login'}</a>

                    </label>

                    {/* <button onClick={handleGoogleSignIn}>Sign in with Google</button> */}
                </div>
            </div>
        </div>

    )
}
export default Login