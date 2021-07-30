import React,{ useState } from 'react';
import { Button } from '@material-ui/core';
import "./banner.css";
import Search from "./Search"
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory(); //to keep track or have some kind of history in the app
    const [showSearch, setShowSearch]=useState(false) //want to keep track if that button is being clicked or not and set default to false
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>} {/*renders out the seacrh component when cicked*/}

                <Button onClick={()=> setShowSearch(!showSearch)/*sets state to true(sets opposite of usestate)*/}className="banner_searchbutton" variant="outlined">
                    {showSearch ? "Hide":"Search Dates"} {/*if search date is true show hide*/}         
                    
                </Button>

            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination </h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button onClick={() => history.push("/search")} variant= "outlined">
                    Explore Nearby
                </Button>

            </div>
            
        </div>
    )
}

export default Banner
