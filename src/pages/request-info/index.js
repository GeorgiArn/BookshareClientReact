import React, { Component } from 'react'
import './index.css'
import UserContext from '../../Context'
import { withRouter } from "react-router-dom"
import DeliveryInfo from '../../components/delivery-info'

class RequestInfo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentUserData: {},
            id: this.props.match.params.id
        }
    }

    static contextType = UserContext

    componentWillReceiveProps(props) {
        this.getRequestInfo(props.match.params.id)
    }

    componentDidMount() {
        this.getRequestInfo(this.props.match.params.id)
        this.getCurrentUserBasicData()
    }

    getRequestInfo = async(id) => {
        const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/private/request-info/${id}`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }});

        const request = await promise.json()
        this.setState({ request })
    }

    getCurrentUserBasicData = async () => {
        const request = await fetch(`https://bookshare-rest-api.herokuapp.com/private/current-user-basic-data`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }});

        const currentUserData = await request.json()
        this.setState({ currentUserData })
    }
    
    isReceiver() {
        const {request, currentUserData} = this.state
        return request.receiver.id === currentUserData.id;
    }

    render() {
        const {request} = this.state
        return (
            <div>
            {request ? (
                <div>
                {this.isReceiver() ? (<h2 className="text-center text-dark py-4">Поздравления! Вие разменихте "{request.requestedBook.title}" за "{request.chosenBook.title}"!</h2>
                ) : (<h2 className="text-center text-dark py-4">Поздравления! Вие разменихте "{request.chosenBook.title}" за "{request.requestedBook.title}"!</h2>)}
                
                <div className="row m-0 pt-5">
                    <div className="col-md-6 col-xs-12 my-3 col-lg-4 col-sm-6 d-flex justify-content-center">
                        <img className="img-responsive fit-image shadow request-info-book"
                            src={request.requestedBook.imageURL} />
                    </div>
                    <div className="col-md-6 col-xs-12 my-3 col-lg-4 col-sm-6 d-flex justify-content-center">
                        <img className="img-responsive fit-image shadow request-info-book"
                            src={request.chosenBook.imageURL} />
                    </div>

                    <div className="col-12 col-lg-4 d-flex align-items-center">
                        {this.isReceiver() ? (
                        <DeliveryInfo user={request.requester}/>) : (
                            <DeliveryInfo user={request.receiver}/>
                        )}
                    </div>
                </div>
                </div>) : null}   
            </div>
        )
    }
}

export default withRouter(RequestInfo)