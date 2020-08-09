import React, { Component } from 'react'
import './index.css'
import CategoryBook from '../category-book';

class NewestBooks extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    getBooks = async() => {
        const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/newest-books`)
        const books = await promise.json()
        this.setState({ books: books })
    }

    componentDidMount() {
        this.getBooks()
    }

    renderBooks() {
        const { books } = this.state;

        return books.map(book => {
            return (
                <CategoryBook key={book.id} {...book} />
            )
        })
    }

    render() {
        return (
            <div className="container-fluid newest-books">
                <h2 className="p-3 newest-books-title">Най-нови книги</h2>
                <div className="row">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
}

export default NewestBooks