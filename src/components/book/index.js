import React, { Component } from 'react'
import './index.css'
import Navigation from '../header';

class Book extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            book: Object
        }
    }

    componentDidMount() {
        this.getBook(this.props.match.params.id);
    }

    getBook = async (id) => {
        const response = await fetch(`https://bookshare-rest-api.herokuapp.com/book/${id}`);
        const book = await response.json()

        this.setState({ book });
    }

    render() {
        const {
            book
        } = this.state

        return (
            <div className="container-fluid padding" >
            <div className="row text-center d-flex justify-content-center book-detail">
                <div className="col-md-4">
                    <img className="book-img" src={book.imageURL} />
                    <p className="book-author">Автор: <span className="book-author-span">{book.author}</span></p>
                    <p className="book-date">Дата на издаване: <span className="book-date-span">{book.datePublished}</span></p>
                    <p className="book-publisher">Издателство: <span className="book-publisher-span">{book.publisher}</span></p>
                {/* <p *ngIf="currentUserData" className="book-owners">Потребители, които предлагат тази книга: <span
                    class="book-owners-span">{{book.users.length}}</span></p>
            <div *ngIf="currentUserData">
                <div *ngIf="book.users.length > 0">
                    <div *ngIf="!isOwner()">
                        <button *ngIf="!isRequested()" class="book-navbtn" data-toggle="modal"
                            [attr.data-target]="'#m' + book.id">Поискай</button>
                        <app-delivery-info-modal [currentUserData]="currentUserData" [bookId]="book.id">
                        </app-delivery-info-modal>
                        <button [disabled] *ngIf="isRequested()" class="book-navbtn">Поискано</button>
                    </div>
                </div>
            </div> */}
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