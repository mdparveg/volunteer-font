import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import Logo from '../Logo/Logo';
import glogo from '../Resource/logos/google.png'

const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                history.replace(from)
                console.log(signedInUser);
                // ...
            }).catch((error) => {
                console.log(error);
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <>
            <div className="login_logo">
                <Link to="/" ><Logo></Logo></Link>
            </div>
            <div className="login">
                <h1>Login With</h1>
                <div className="button">
                    <img style={{ width: "25px" }} className="mr-5 ml-1" src={glogo} alt="" />
                    <button className="gButton" onClick={googleSignIn}>Google Sign in</button>
                </div>
                <p>Don’t have an account? <span className="text-primary">Create an account</span></p>
            </div>
        </>
    );
};

export default Login;