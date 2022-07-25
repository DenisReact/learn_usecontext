import React, { useReducer, useEffect } from 'react';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Private from './components/Private/Private'
import Store from './context'

import { initialState } from './context'
import reducer from './reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.getItem("login") && dispatch({type: "setLogin", payload: true})
  }, [])

  return (
  <Store.Provider value={{ state, dispatch }}>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/private" element={<Private />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </div>
    </div>
  </Store.Provider>
  );
}

export default App;
