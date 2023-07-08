import { useState } from "react";
import { Form, Link, useSearchParams, useNavigate, useNavigation } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Card from "../UI/Card";
import Alert from "../UI/Alert";
import Button from "../UI/Button";
import classes from "./AuthenticationForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth-slice";

const AuthenticationForm = () => {
    const [searchParams] = useSearchParams();
    const isUserLogin = searchParams.get('state') === 'login';
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const [error, setError] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const dispatch = useDispatch();

    const authenticateUser = async (e, type=false) => {
        let userAuth;
        let message;
        try{
            e.preventDefault();
            if(type) userAuth = await signInWithEmailAndPassword(auth, emailRegister, passwordRegister);
                else userAuth = await createUserWithEmailAndPassword(auth, emailRegister, passwordRegister);
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                })
            )
            return navigate('/my-account');
        } catch (err){  
            switch(err.code){
                case 'auth/invalid-email':
                    message = 'Invalid email';
                    break;
                case 'auth/missing-password':
                    message = 'Missing password';
                    break;
                case 'auth/too-many-requests':
                    message = 'Too many requests';
                    break;
                case 'auth/wrong-password':
                    message = 'Wrong password';
                    break;
                case 'auth/user-not-found':
                    message = 'User not found';
                    break;
                default:
                    message = err.message;
            }
            setError(message);
        }
    }

    return (
        <div className={classes['form-wrapper']}>
            <h2>{ isUserLogin ? 'Sign In' : 'Sign Up'}</h2>
            <Card>
                { error && <Alert message={error} /> }
                <Form method="post" className={classes['auth-form']}>
                    <label htmlFor="email">
                        Email
                        <input type="text" id="email" name="email" onChange={(e) => setEmailRegister(e.target.value)} />

                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="password" id="password" name="password" onChange={(e) => setPasswordRegister(e.target.value)} />
                    </label>
                    <div>
                        <Button type="submit" disabled={isSubmitting}  onClick={ (e) => authenticateUser(e, isUserLogin) }>{isSubmitting ? "Submitting..." : "Submit"}</Button>
                        <Link to={`?state=${isUserLogin ? "signup" : "login"}`}>{isUserLogin ? 'Create Account' : 'Sign in'}</Link>
                    </div>
                </Form>
            </Card>
        </div>        
    )
}

export default AuthenticationForm;