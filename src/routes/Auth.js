import { authService } from "fbase";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        console.log(event);
        const {
            target: {name, value},
        } = event;
        if(name==="email") {
            setEmail(value);
        } else if (name==="password") {
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data;
            if(newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, passowrd);
            } else {
                data = await authService.signInWithEmailAndPassword(email, passowrd);
            }
            console.log(data);

        } catch(error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (<div>
        <form onSubmit={onSubmit}>
            <input name="email" type="text" placeholder="Email" required onChange={onChange}/>
            <input name="password" type="text" placeholder="Password" required onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
        </form>
        <p>{error}</p>
        <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
        <div>
            <button>Continue with Google</button>
            <button>Continue with GitHub</button>
        </div>
    </div>);
};
export default Auth;