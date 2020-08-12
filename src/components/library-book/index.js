import React from 'react'
import './index.css'

const LibraryBook = ({ title, author, imageURL, id }) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-2 library-book">
            <div>
                <img className="library-book-img" src={imageURL}/>
                <p className="library-book-title">{title}</p>
                <p className="library-book-author">Автор: {author}</p>
            </div>
        </div>
    )
}

export default LibraryBook