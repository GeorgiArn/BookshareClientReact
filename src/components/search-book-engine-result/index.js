import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const SearchBookEngineResult = ({title, author, imageURL, id}) => {
    return (
        <div className="search-book">
            <Link to={"book/" + id}>
                <img src={imageURL} alt={title}/>
                <p className="search-book-title">{title}</p>
                <p className="search-book-author">Автор: {author}</p>
            </Link>
        </div>
    )
}

export default SearchBookEngineResult