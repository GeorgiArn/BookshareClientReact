import React from 'react'

const UserContext = React.createContext({
    loggedIn: false,
    logIn: () => { },
    logOut: () => { }
})

export default UserContext