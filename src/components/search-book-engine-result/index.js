import React from 'react'
import './index.css'

const SearchBookEngineResult = ({title, author, imageURL}) => {
    return (
        <div className="book">
            <img src={imageURL} alt={title}/>
            <p className="book-title">{title}</p>
            <p className="book-author">Автор: {author}</p>
        </div>
    )
}

export default SearchBookEngineResult