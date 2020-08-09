import React from 'react'
import './index.css'
import logo from '../../images/logo.png'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
            <div className="row container-fluid">
                <div>
                    <a className="navbar-brand"><img src={logo}
                        className="img-thumbnail float-left" alt="bookshare-logo" href="/"/></a>
                </div>
                <div className="nav-icons">
                    <button className="navbar-toggler float-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        {/* <li class="nav-item">
                            <a routerLink="/book/library" class="nav-item nav-link"><button className={styles.navbtn}>Моята
                                Библиотека</button></a>
                        </li> */}
                        {/* Notifications 
                        ----- */}
                            <li className="nav-item">
                                <a className="nav-link px-4 text-dark login" href="/">Влез</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-item nav-link" href="/"><button className="navbtn">Регистрирай
                                    се</button></a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link nav-item"><img class="logout"
                                src="assets/static/logout.png" /></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;