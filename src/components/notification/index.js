import React, { Component } from 'react'
import './index.css'

class Notification extends Component {
    constructor(props) {
        super(props)
    }

    isReceiver(notification) {
        return notification.receiver.id === this.props.currentUserData.id;
    }

    render() {
        const { notification } = this.props
        
        return (
            <div key={notification.id}>
                {this.isReceiver(notification) && notification.isAccepted ? (
                <div className="request">
                    <p>{notification.requester.firstName} ти поиска "{notification.requestedBook.title}". Избери си една от неговите книги.</p>
                </div>) : null}

                {this.isReceiver(notification) && !notification.isAccepted ? (
                <div className="request">
                    <p>{notification.requester.firstName} ти поиска "{notification.requestedBook.title}". Избери си една от неговите книги.</p>
                </div>) : null}

                {!this.isReceiver(notification) && notification.isAccepted ? (
                    <div className="request">
                        <p>Твоята заявка за "{notification.requestedBook.title}" беше приета от {notification.receiver.firstName}, който поиска "{notification.chosenBook.title}".</p>
                </div>) : null}
            </div> 
        )
    }
}

export default Notification