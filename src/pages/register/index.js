import React, { Component } from 'react'
import authenticate from '../../utils/authenticate'
import Context from '../../Context'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            phoneNumber: '',
            address: '',
            fieldError: false
        }
    }

    static contextType = Context

    changeFieldValue = event => {
        const newState = {}

        newState[event.target.name] = event.target.value
        this.setState(newState)

        if (event.target.value.match(/^.{3,30}/)) {
            this.setState({fieldError: false});
        } else {
            this.setState({fieldError: true});
        }

    }

    handleSubmit = async (event) => {
        const {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            address
        } = this.state

        event.preventDefault()

        try {
            await fetch('https://bookshare-rest-api.herokuapp.com/register', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    phoneNumber,
                    address
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            await authenticate('https://bookshare-rest-api.herokuapp.com/oauth/v2/token', { 
                username: email,
                password,
                grant_type: "password",
                client_id: "2_4",
                client_secret: "4"
            }, (() => {
                this.context.logIn()
            }), (() => this.setState({ error: true })))
        } catch (e) {
            alert('Имейлът е зает!')
        }
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            address,
            fieldError
        } = this.state

        return (
            <div className="container">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3 col-sm-0"></div>
                            <div className="col-md-6 col-sm-12">
                                <h3 className="text-center mt-2">Регистрация</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <input name="firstName" type="text" value={firstName} placeholder="Име" className="form-control mt-3" onChange={this.changeFieldValue} required />
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input name="lastName" type="text" value={lastName} placeholder="Фамилия" className="form-control mt-3" onChange={this.changeFieldValue} required />
                                            </div>
                                        </div>
                                        <input name="email" type="email" value={email} placeholder="Имейл" className="form-control mt-3" onChange={this.changeFieldValue} required />
                                        <input name="password" type="password" value={password} placeholder="Парола" className="form-control mt-3" onChange={this.changeFieldValue} required />
                                        <input name="phoneNumber" type="text" value={phoneNumber} placeholder="Телефонен номер" className="form-control my-3" onChange={this.changeFieldValue} required />
                                        <input name="address" type="text" value={address} placeholder="Адрес, на който желаеш да получаваш книгите" className="form-control my-3" onChange={this.changeFieldValue} required />
                                        {fieldError ? (<p>Полето трябва да съдържа поне три символа.</p>) : null}
                                        <div className="form-row text-center">
                                            <div className="col-12">
                                                <button className="btn btn-dark text-center mt-3 btnreg">Регистрирай се</button>
                                            </div>
                                        </div>
                                    </form>
                        </div>
                        <div className="col-md-3 col-sm-0"></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Register