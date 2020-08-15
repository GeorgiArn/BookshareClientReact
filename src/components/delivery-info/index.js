import React from 'react'
import './index.css'

const DeliveryInfo = (user) => {
    return (
        <div className="text-center text-dark p-4 delivery-info lastdiv">
            <h4 className="delivery-info-title">Информация за изпращане</h4>
            <p className="delivery-info-text"><b>Име:</b> {user.user.firstName} {user.user.lastName}</p>
            <p className="delivery-info-text"><b>Tел. номер:</b> {user.user.phoneNumber}</p>
            <p className="delivery-info-text"><b>Адрес:</b> {user.user.address}</p>
        </div>
    )
}

export default DeliveryInfo