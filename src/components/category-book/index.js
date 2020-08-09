import React from 'react'
import './index.css'

const CategoryBook = ({ title, author, imageURL }) => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-6 mb-4">
            <div className="border rounded category-book">
                <img className="p-2 img-responsive fit-image" alt={title} src={imageURL} />
                <h4 className="pl-2 category-book-title">{title}</h4>
                <p className="pl-2 text-muted font-italic">Автор: {author}</p>
            </div>
        </div>
    )
}

export default CategoryBook