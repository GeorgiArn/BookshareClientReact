import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './components/homepage'
import Book from './components/book'
import Header from './components/header'
import Login from './components/login'
import Register from './components/register'
import Context from './Context'

const Navigation = () => {
    const loggedIn = useContext(Context).loggedIn

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/book/:id" component={Book}/>
                <Route path="/login">{loggedIn ? (<Redirect to="/" />) : (<Login />)}</Route>
                <Route path="/register" component={Register}>{loggedIn ? (<Redirect to="/" />) : (<Register />)}</Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation