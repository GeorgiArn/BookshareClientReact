import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const CategoryBook = ({ title, author, imageURL, id }) => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-6 mb-4">
            <div className="border rounded category-book">
            <Link to={"book/" + id}>
                <img className="p-2 img-responsive fit-image" alt={title} src={imageURL} />
                <h4 className="pl-2 category-book-title">{title}</h4>
                <p className="pl-2 text-muted font-italic">Автор: {author}</p>
            </Link>
            </div>
        </div>
    )
}

export default CategoryBook