import { useEffect, useState } from "react";  /* This is named export */
import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import {Link } from "react-router-dom";


// Filter the restaurant data according input type
function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
}
// Body Component for body section: It contain all restaurant cards
const Body = () => {
    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    
    // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {
        getRestaurants();
    }, []);

    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants(){
        const data = await fetch(swiggy_api_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    // if allRestaurants is empty don't render restaurants cards
    if(!allRestaurants) return null;

    return filteredRestaurants?.length == 0 ? ( 
    <Shimmer/>
    ) : (
    <>
        <div>
            <input
                type="text"
                className="search-container"
                placeholder="Search"
                value={searchInput}
                onChange = {(e) => {
                    setSearchInput(e.target.value);
                }}
            />
            <button 
                className="search-btn" 
                onClick={() => {
                    const data = filterData(searchInput, allRestaurants);
                    setFilteredRestaurants(data);
                }}
            >
            Search
            </button>
        </div>
        <div className="restaurant-list">
            {filteredRestaurants.map((restaurant) => {
                return (
                    <Link 
                        to={"/restuarant/" + restaurant.data.id}
                        key ={restaurant.data.id}
                    >
                        <RestaurantCard {...restaurant.data}/>
                    </Link>
                );
            })}
        </div>        
    </>
    );
};

export default Body;