import React, { Component } from 'react'
import './index.css'
import CategoryBook from '../category-book';

class MostExchangedBooks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    getBooks = async() => {
        const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/most-exchanged-books`)
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
            <div className="container-fluid most-exchanged-books">
                <h2 className="p-3 most-exchanged-books-title">Най-разменяни книги</h2>
                <div className="row">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
}

export default MostExchangedBooks