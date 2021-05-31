import React,{useReducer,createContext} from 'react'
import { Route,Switch} from 'react-router-dom'
import Navbar from './component/Navbar'
import About from './component/About'
import Contact from './component/Contact'
import Login from './component/Login'
import Home from './component/Home'
import Signup from './component/Signup'
import Logout from './component/Logout'
import './App.css'
import ErrorPage from './component/ErrorPage'
import {initialState,reducer} from '../src/reducer/UseReducer'


export const UserContext=createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    
      <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/about">
        <About/>
      </Route>
      
      <Route exact path="/login">
        <Login/>
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/logout">
        <Logout/>
      </Route>
      <Route>
        <ErrorPage/>
      </Route>
      </Switch>
      
      </UserContext.Provider>
    </>
  )
}

export default App
