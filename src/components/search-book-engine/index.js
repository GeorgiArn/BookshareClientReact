import React, { Component } from 'react'
import './index.css'
import SearchBookEngineResult from '../search-book-engine-result';

class SearchBookEngine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            searchValue: ''
        }
    }

    getBooks = async(e) => {
        this.setState({ searchValue: e.target.value });

        if (this.state.searchValue.length > 1) {
            const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/search-book?search=${this.state.searchValue}`)
            const books = await promise.json()
            this.setState({ books: books })
        } else {
            this.setState({ books: [] })
        }
    }

    renderBooks() {
        const { books } = this.state;

        return books.map(book => {
            return (
                <SearchBookEngineResult key={book.id} {...book} />   
            )
        })
    }

    render() {
        return (
            <div id="search-book-engine">
                <form className="form-inline search-form">
                    <input type="text" value={this.state.searchValue} className="search-engine form-control" onChange={this.getBooks}/>
                </form>
                <div className="books">
                    {this.renderBooks()}
                </div>
            </div>
        );
    }

}

export default SearchBookEngine