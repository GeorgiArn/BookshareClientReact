import React from 'react'

const UserContext = React.createContext({
    loggedIn: false,
    accessToken: '', 
    logIn: () => { },
    logOut: () => { }
})

export default UserContext