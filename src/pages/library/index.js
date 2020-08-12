import React, { Component } from 'react'
import UserContext from '../../Context'
import './index.css'
import AddBookEngine from '../../components/add-book-engine'
import LibraryBook from '../../components/library-book'

class Library extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userBooks: [],
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUserBooks()
    }

    getUserBooks = async() => {
        const request = await fetch(`https://bookshare-rest-api.herokuapp.com/private/user-books`, { headers: {
            'Authorization': `Bearer ${this.context.accessToken}`
        }});

        const userBooks = await request.json()
        this.setState({ userBooks })
    }

    renderUserBooks() {
        const { userBooks } = this.state;

        return userBooks.map(book => {
            return (
                <LibraryBook key={book.id} {...book} />
            )
        })
    }

    render() {
        const { userBooks } = this.state
        return (
            <div>
                <AddBookEngine getUserBooks={this.getUserBooks} />
            <div className="container-fluid padding library-books">
                {userBooks ? (
                    <div>
                        <h2 className="library-title">Моята Библиотека</h2>
                        {userBooks.length > 0 ? (
                        <div className="row text-center d-flex justify-content-center">
                            {this.renderUserBooks()}
                        </div>
                        ) : (
                        <div className="row text-center d-flex justify-content-center">
                            <p class="msg">Все още нямаш книги в библиoтеката ти.</p>
                        </div>
                        )}
                    </div>
                ) : null}
            </div>
            </div>
        )
    }
}

export default Library