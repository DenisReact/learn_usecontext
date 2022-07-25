import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import s from './Private.module.css'
import Store from '../../context'


const Private = () => {
    const {state, dispatch} = useContext(Store);

    const unloginHandler = () => {
        localStorage.removeItem("login")
        dispatch({type: "setLogin", payload: false})
    }
    if(!localStorage.getItem("login")) return <Navigate to="/" />

    return (
        <div className={s.private}>
            {
               state.login ? 
               ( 
                  <>
                    <h2>Secret</h2>
                    <div className={s.unlogin} onClick={unloginHandler}>
                        <Link to="/">
                            Unlogin
                        </Link>
                    </div>
                  </>
               ) :
               <Link to="/">Go to home</Link>
            }
        </div>
    )
}

export default Private
