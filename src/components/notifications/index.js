import React, { Component } from 'react'
import './index.css'
import notification from '../../images/notification.png'
import UserContext from '../../Context'
import Notification from '../notification'

class Notifications extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notifications: [],
            unreadNotificationsCount: 0,
            isClicked: false,
            currentUserData: {}
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUnreadNotificationsCount()
        this.getCurrentUserBasicData()
    }

    getCurrentUserBasicData = async () => {
        const request = await fetch(`https://bookshare-rest-api.herokuapp.com/private/current-user-basic-data`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }});

        const currentUserData = await request.json()
        this.setState({ currentUserData })
    }

    getUserNotifications = async() => {
        if (this.state.isClicked) {
            this.setState({notifications: [], isClicked: false})
        } else {
            this.readAllNotifications()
            const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/private/all-requests`, { headers: {
                'Authorization': `Bearer ${this.context.accessToken}`
            }})
            const notifications = await promise.json()
            
            this.setState({notifications, isClicked: true})
        }
    }

    readAllNotifications = async() => {
        await fetch(`https://bookshare-rest-api.herokuapp.com/private/read-unread-requests`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }})
        
        await this.setState({unreadNotificationsCount: 0})
    }

    getUnreadNotificationsCount = async() => {
        const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/private/unread-requests-count`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }})
        const unreadNotificationsCount = await promise.json()
        
        this.setState({unreadNotificationsCount})
    }

    renderNotifications() {
        const { notifications, currentUserData } = this.state;

        return notifications.map(notification => {
            return (
                <Notification key={notification.id} notification={notification} currentUserData={currentUserData}/>
            )
        })
    }

    render() {
        const { unreadNotificationsCount, notifications, currentUserData } = this.state

        return (
            <div className="nav-item nav-link" onClick={this.getUserNotifications}>
                <img className="notification" src={notification} />
                {unreadNotificationsCount > 0 ? <p className="count">{unreadNotificationsCount}</p> : null}
                {notifications.length > 0 && currentUserData ? (
                    <div className="requests pb-10">
                        {this.renderNotifications()}
                    </div>
                ) : null}
            </div>
        )
    }
}

export default Notifications