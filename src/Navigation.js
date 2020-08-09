import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Homepage from './components/homepage'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route to="/" exact component={Homepage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation