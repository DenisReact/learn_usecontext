import React, {useEffect, useState, useContext} from 'react';
import s from './Login.module.css';
import { Link, Navigate } from 'react-router-dom';
import Store from '../../context'


const Login = () => {

    const { state, dispatch } = useContext(Store);

    const [currentForm, setCurrentForm] = React.useState<boolean>(false);
    const [email, setEmail] = useState<string>("lopatinski@gmail.com");
    const [password, setPassword] = useState<string>("ddddd");

    const emailHandler = (event: any) => setEmail(event.target.value)
    const passwordHandler = (event: any) => setPassword(event.target.value)

    const regEmail: RegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const regPassword: RegExp = /^(\w|\d){4,20}$/;
    useEffect(() => {
       if (regEmail.test(email), regPassword.test(password)){
           setCurrentForm(true);
       }else{
           setCurrentForm(false)
       }
    }, [email, password])

    if(localStorage.getItem("login")) return <Navigate to="/private" />

    const loginHandler = () => {
        localStorage.setItem("login", email)
        dispatch({type: "setLogin", payload: true})
    }

    return (
        <div className={s.wrapper}>

        <div className={s.body}>
                <div>
                    <label htmlFor="">ЭЛ.ПОЧТА</label>
                    <input placeholder=' email' list="logins" type="email" value={email} onChange={emailHandler} />
                    {
                         window.localStorage.getItem("login") && (
                            <datalist id="logins">
                                <option>{window.localStorage.getItem("login")}</option>
                            </datalist>  
                         )
                    }

                </div>
                <div>
                    <label htmlFor="">ПАРОЛЬ</label>
                    <input placeholder=' password' value={password}  onChange={passwordHandler} type="password" />
                </div>
                    
            
                <div className={currentForm ? `${s.log} ${s.active}` : s.log} onClick={loginHandler}>
                    <Link to={"/private"}>Войти &#8594;</Link>
                </div>
        </div>
        </div>
    )
}

export default Login;