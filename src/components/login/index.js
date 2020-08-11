import React, { Component } from 'react'
import authenticate from '../../utils/authenticate'
import Context from '../../Context'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    static contextType = Context

    changeFieldValue = event => {
        const newState = {}
        newState[event.target.name] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {
            username,
            password
        } = this.state

        await authenticate('https://bookshare-rest-api.herokuapp.com/oauth/v2/token', { 
            username,
            password,
            grant_type: "password",
            client_id: "2_4",
            client_secret: "4"
        }, (() => {
            this.context.logIn()
        }), (() => this.setState({ error: true })))
    }
    
    render() {
        const {
            username,
            password
        } = this.state

        return (
            <div className="container">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4 col-sm-0"></div>
                        <div className="col-md-4 col-sm-12">
                            <h3 className="text-center mt-2">Вход</h3>
                            <form onSubmit={this.handleSubmit}>
                                <input name="username" value={username} type="email" placeholder="Имейл" className="form-control mt-4" onChange={this.changeFieldValue} required />
                                <input name="password" value={password} type="password" placeholder="Парола" className="form-control mt-3" onChange={this.changeFieldValue} required />
                                <div className="form-row text-center">
                                    <div className="col-12">
                                        <button className="btn btn-dark text-center mt-3 btnlog">Влез</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-sm-0"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login