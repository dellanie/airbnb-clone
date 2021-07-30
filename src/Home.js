import React from 'react'
import "./home.css"
import Banner from "./Banner"  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsMQMjsVZWShi1JdHAi18X6a-_cOl9iBc0w&usqp=CAU
import Card from "./Card"
function Home() {//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp1TFkiOmsG7XcSlgLg_15x8lKs7nDV4W9g&usqp=CAU
    return (
        <div className="home">
            <Banner/>
            
            <div className="home_section">
                <Card
                    src="https://a0.muscache.com/im/pictures/f5504a85-b0a9-4c96-90b9-3aabacf9f8d4.jpg?aki_policy=x_large"
                    title="Online Experience"
                    description="Unique activities we can do together,led by a world of hosts"/>
                <Card
                    src="https://www.roadaffair.com/wp-content/uploads/2020/08/puerto-rico-airbnb-1024x683.jpg"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep"/>
                <Card
                    src="https://www.roadaffair.com/wp-content/uploads/2020/12/airbnb-nashville-tennessee-usa-1024x683.jpg"
                    title="Entire Homes"
                    description="Comfortable private places,with room"/>
            </div>
            <div className="home_section">
                <Card
                    src="https://www.roadaffair.com/wp-content/uploads/2020/11/new-orleans-airbnb-1024x683.jpg"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with stunning view of the beach side in Sunny Bournemouth"
                    price="£130/night"/>
                <Card
                    src="https://a0.muscache.com/im/pictures/27518f32-f56b-4199-9393-0ad5890d3c45.jpg?aki_policy=x_large"
                    title="Penthouse in London"
                    description="Enjoy amazing sigh in London in penthouse"
                    price="£350/night"/>
                <Card
                    src="https://shewandersabroad.com/wp-content/uploads/2021/01/Amazing-Eiffel-Tower-Views-Paris-Airbnb-1-1024x683.jpg"
                    title="1 Bedroom Apartment"
                    description="Superhost with great amenities and a fabulous shopping complex nearby"
                    price="£70/night"/>
            </div>
        </div>
    )
}

export default Home
