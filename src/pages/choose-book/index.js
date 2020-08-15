import React, { useState, useContext, useEffect, useParams, useLocation } from 'react'
import './index.css'
import UserContext from '../../Context'

function ChooseBook (props) {

    const [request, setRequest] = useState({})
    const context = useContext(UserContext)

    useEffect(() => {
        getRequest(props.match.params.id)
    }, [request])

    const getRequest = async(id) => {
        const promise = await fetch(`https://bookshare-rest-api.herokuapp.com/private/request/${id}`, { headers: {
            'Authorization': `Bearer ${context.accessToken}`
        }});

        const request = await promise.json()
        
        return setRequest(request)
    }

    const renderBooks = () => {
        return request.requester.books.map((book) => {
            return (
                <div key={book.id} onClick={() => chooseBook(book.id)} className="col-xs-12 col-sm-4 col-md-2 choose-book">
                    <img className="choose-book-img" src={book.imageURL}/>
                    <p className="choose-book-title">{book.title}</p>
                    <p className="choose-book-author">Автор: {book.author}</p>
                </div>
            )
        })
    }

    const chooseBook = async(bookId) => {
        
        await fetch(`https://bookshare-rest-api.herokuapp.com/private/accept-book`, {
            method: 'POST',
            body: JSON.stringify({
                bookId: bookId,
                requestId: props.match.params.id
            }),
            headers: {
                'Authorization': `Bearer ${context.accessToken}`
            }
        });

        await props.history.push("/request/" + props.match.params.id);
    }

    return (
        <div className="container-fluid padding choose-books">
            {request.requester ? (
            <div className="row">
                <h3 className="col-6 choose-library-title pl-5">Избери си една от книгите на {request.requester.firstName}</h3>
            </div>
            ) : null}
            {request.requester && request.requester.books ? (
            <div className="row text-center d-flex justify-content-center">
                {renderBooks()}
            </div>
            ) : null}
        </div>
    )
}

export default ChooseBook