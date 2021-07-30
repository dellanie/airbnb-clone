import { Favorite, Star } from '@material-ui/icons';
import React from 'react';
import "./searchresult.css";

function SearchResult({
    img,location,title,description,star,price,total
}) {
    return (
        <div className="searchresult">
            <img src={img} alt=""/>
            <Favorite className="searchresult_heart"/>
            <div className="searchresult_info">
                <div className="searchresult_infotop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchresult_infobottom">
                    <div className="searchresult_infobottomstars">
                        <Star className="searchresult_infobottomstar"/>
                        <p>
                            <strong>{star}
                            </strong>
                        </p>
                    </div>
                    <div className="searchresult_infoprice">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default SearchResult
