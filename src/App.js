import React, { Component } from 'react'
import UserContext from './Context'

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)');
  return cookieValue ? cookieValue[2] : null;
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null,
      accessToken: ''
    }
  }

  logIn = () => {
    this.setState({
      loggedIn: true,
      accessToken: getCookie('x-auth-token')
    })
  }

  logOut = () => {
    document.cookie = "x-auth-token= ;"
    this.setState({
      loggedIn: false,
      accessToken: ''
    })
  }

  componentDidMount() {
    const token = getCookie('x-auth-token')

    if (!token) {
      this.logOut()
      return
    }

    this.logIn()
  }

  render() {
    const {
      loggedIn,
      accessToken
    } = this.state

    if (loggedIn === null) {
      return (<div>Loading...</div>)
    }

    return (
      <UserContext.Provider value={{
        loggedIn,
        accessToken,
        logIn: this.logIn,
        logOut: this.logOut
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default App