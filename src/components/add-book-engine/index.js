import React, { Component } from 'react'
import './index.css'
import UserContext from '../../Context';
import AddBookEngineResult from '../add-book-engine-result';

class AddBookEngine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchedBooks: [],
            searchValue: ''
        }
    }

    static contextType = UserContext

    getSearchedBooks = async(e) => {
        this.setState({ searchValue: e.target.value });

        if (this.state.searchValue.length > 1) {
            const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/search-book?search=${this.state.searchValue}`)
            const books = await promise.json()
            this.setState({ searchedBooks: books })
        } else {
            this.setState({ searchedBooks: [] })
        }
    }

    renderSearchedBooks() {
        const { searchedBooks } = this.state;

        return searchedBooks.map(book => {
            return (
                <AddBookEngineResult key={book.id} {...book} getUserBooks={this.props.getUserBooks} resetEngine={this.resetEngine}/>
            )
        })
    }

    resetEngine = async() => {
        this.setState({ searchedBooks: [], searchValue: '' });
    }

    render() {
        const { searchValue } = this.state

        return (
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center add-book-engine add-book-text">
                    <p>Добави книгите, които желаеш да размениш.</p>
                </div>
                <div className="col-md-12 d-flex justify-content-center add-book-engine">
                    <div>
                        <form className="form-inline">
                            <input name="searchBook" value={searchValue} type="text" onChange={this.getSearchedBooks} className="add-book-engine form-control" placeholder="Заглавие на книга... " autoComplete="off"/>
                        </form>
                        <div className="searched-books">
                        {this.renderSearchedBooks()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddBookEngine