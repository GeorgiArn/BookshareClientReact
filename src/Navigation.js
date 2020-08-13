import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Book from './pages/book'
import Header from './components/header'
import Context from './Context'
import Homepage from './pages/homepage'
import Register from './pages/register'
import Login from './pages/login'
import Library from './pages/library'
import RequestInfo from './pages/request-info'

const Navigation = () => {
    const loggedIn = useContext(Context).loggedIn

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/book/:id" component={Book}/>
                <Route path="/login">{loggedIn ? (<Redirect to="/" />) : (<Login />)}</Route>
                <Route path="/register">{loggedIn ? (<Redirect to="/" />) : (<Register />)}</Route>
                <Route path="/library">{loggedIn ? (<Library />) : (<Redirect to="/"/>)}</Route>
                <Route path="/request/:id">{loggedIn ? (<RequestInfo />) : (<Redirect to="/"/>)}</Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation