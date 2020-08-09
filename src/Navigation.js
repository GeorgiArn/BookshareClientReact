import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Homepage from './components/homepage'
import Book from './components/book'
import Header from './components/header'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/book/:id" component={Book}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation