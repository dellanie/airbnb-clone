import React from 'react';
import "./searchpage.css";
import {Button} from "@material-ui/core";
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage_info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancelation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More Filter
                </Button>

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/27518f32-f56b-4199-9393-0ad5890d3c45.jpg?aki_policy=x_large"
                    location="Private room in Lagos"
                    title="Stay in a spacious luxurious house"
                    description="3 bedrooms .2 bathrooms. Wifi. Kitchen. Pool"
                    star="4.73"
                    price="$30/night"
                    total="$200 total"

                />

                <SearchResult
                    img="https://www.roadaffair.com/wp-content/uploads/2020/12/airbnb-austin-texas-1024x683.jpg"
                    location="Private room in Lagos"
                    title="Stay in a spacious luxurious house"
                    description="3 bedrooms .2 bathrooms. Wifi. Kitchen. Pool"
                    star="4.3"
                    price="$50/night"
                    total="$500 total"

                />

                
                <SearchResult
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GOj6dGnppmi_svRHySSUEdl8IK-08VYZgQ&usqp=CAU"
                    location="Private room in Waterworld"
                    title="Stay in a spacious luxurious house"
                    description="3 bedrooms .2 bathrooms. Wifi. Kitchen. Pool"
                    star="4.73"
                    price="$60/night"
                    total="$600 total"

                />

                
                <SearchResult
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqiQI1mbFNgXwPkXRyKWBTNci23GPJUQjTQ&usqp=CAU"
                    location="Private room in Abuja"
                    title="Stay in a spacious luxurious house"
                    description="3 bedrooms .2 bathrooms. Wifi. Kitchen. Pool"
                    star="4.73"
                    price="$300/night"
                    total="$2100 total"

                />
            </div> 
        </div>
    )
}

export default SearchPage 
