import React, { useContext, Component } from 'react'
import './index.css'
import logo from '../../images/logo.png'
import logout from '../../images/logout.png'
import { Link } from 'react-router-dom'
import Context from '../../Context'

class Header extends Component {

    constructor(props) {
        super(props)
    }

    static contextType = Context

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
                <div className="row container-fluid">
                    <div>
                        <Link to="/" className="navbar-brand"><img src={logo}
                            className="img-thumbnail float-left" alt="bookshare-logo" href="/"/></Link>
                    </div>
                    <div className="nav-icons">
                        <div className="float-right" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    {!this.context.loggedIn ? null : <Link to="/library" className="nav-item nav-link"><button className="navbtn">Моята
                                        Библиотека</button></Link>}
                                </li>
                                <li className="nav-item">
                                    {this.context.loggedIn ? null : <Link to="/login"  className="nav-link px-4 text-dark login">Влез</Link>}
                                </li>
                                <li className="nav-item">
                                    {this.context.loggedIn ? null : <Link to="/register" className="nav-item nav-link" href="/"><button className="navbtn">Регистрирай
                                        се</button></Link>}
                                </li>
                                <li className="nav-item">
                                    {!this.context.loggedIn ? null : <div onClick={this.context.logOut} className="nav-link nav-item"><img className="logout"
                                    src={logout} /></div>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;