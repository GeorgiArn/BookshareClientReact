import React from 'react'
import './index.css'
import template from '../../images/template.jpg'
import SearchBookEngine from '../search-book-engine'

const Homepage = () => {
    return (
        <div id="homepage">
            <img src={template} className="img-fluid template"/>
            <div className="row">
                <div className="col-md-4 col-xs-2 col-sm-2"></div>
                <div className="search-engine-box col-md-4 col-xs-8 col-sm-8 justify-content-center">
                    <div className="search-text text-center">ПОТЪРСИ КНИГА</div>
                    <br/>
                    <SearchBookEngine/>
                </div>
                <div className="col-md-4 col-xs-2 col-sm-2"></div>
            </div>
        </div>
    );
}

export default Homepage;