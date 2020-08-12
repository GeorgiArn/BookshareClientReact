import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import UserContext from '../../Context'

class AddBookEngineResult extends Component {
    constructor(props) {
        super(props)
    }

    static contextType = UserContext

    addBook = async () => {
        const { id } = this.props
        
        await fetch(`https://bookshare-rest-api.herokuapp.com/private/add-book`, { 
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: {
                'Authorization': `Bearer ${this.context.accessToken}`
            }
        });

        await this.props.resetEngine()
        await this.props.getUserBooks()
    }

    render() {
        const {title, author, imageURL} = this.props

        return (        
            <div className="add-book" onClick={this.addBook}>
                <img src={imageURL} alt={title}/>
                <p className="add-book-title">{title}</p>
                <p className="add-book-author">Автор: {author}</p>    
            </div>
        )
    }
}

export default AddBookEngineResult