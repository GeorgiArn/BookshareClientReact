import React, { Component } from 'react'
import './index.css'
import UserContext from '../../Context'

class Book extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            book: Object,
            user: Object
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getBook(this.props.match.params.id);
        if (this.context.loggedIn) {
            this.getCurrentUserBasicData()
        }
    }

    getCurrentUserBasicData = async () => {
        const request = await fetch(`https://bookshare-rest-api.herokuapp.com/private/current-user-basic-data`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }});

        const user = await request.json()
        this.setState({ user })
    }

    getBook = async (id) => {
        const request = await fetch(`https://bookshare-rest-api.herokuapp.com${this.context.loggedIn ? '/private' : ''}/book/${id}`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }});

        const book = await request.json()
        this.setState({ book });
    }

    isOwner() {
        return this.state.book.users.some(user => user["id"] === this.state.user.id)
    }
    
    isRequested() {
        return this.state.user.requests.some(request => request["requestedBook"]["id"] === this.state.book.id);
    }

    requestBook = async () => {
        const bookId = this.state.book.id;
        try {
            await fetch(`https://bookshare-rest-api.herokuapp.com/private/book-request`, { 
                method: 'POST',
                body: JSON.stringify({ bookId }),
                headers: {
                    'Authorization': `Bearer ${this.context.accessToken}`
                }
            });

            await this.getCurrentUserBasicData()
        } catch (e) {
            console.log('error');
        }
    }

    render() {
        const { book, user } = this.state
        const { loggedIn } = this.context

        return (
            <div className="container-fluid padding" >
            <div className="row text-center d-flex justify-content-center book-detail">
                <div className="col-md-4">
                    <img className="book-img" src={book.imageURL} />
                    <p className="book-author">Автор: <span className="book-author-span">{book.author}</span></p>
                    <p className="book-date">Дата на издаване: <span className="book-date-span">{book.datePublished}</span></p>
                    <p className="book-publisher">Издателство: <span className="book-publisher-span">{book.publisher}</span></p>
                { book.users && loggedIn ? (
                <p className="book-owners">Потребители, които предлагат тази книга: <span
                className="book-owners-span">{ book.users.length }</span></p>
                ) : null }
                {(book.users && book.users.length > 0) && user.requests && !this.isOwner() ? (
                    <div>
                        {(!this.isRequested() ? (
                        <button className="book-navbtn" onClick={this.requestBook} >Поискай</button>
                        ) : (
                            <button className="book-navbtn" disabled>Поискано</button>
                        ))}
                    </div>
                ) : null}

                </div>
                <div className="col-md-7 book-info">
                    <h5 className="book-title">{book.title}</h5>
                    <p className="book-description">{book.description}</p>
                </div>
            </div>

            </div>
        )
    }
}

export default Book