import { useEffect, useState} from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { swiggy_Menu_api_URL } from "../constants";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    }, [])

    async function getRestaurantMenu(){
        const data  = await fetch(swiggy_Menu_api_URL + resId + "&submitAction=ENTER");
        const json = await data.json();
        // console.log(json.data);
        setRestaurant(json.data);
    }

    return !restaurant ? ( <Shimmer/> 
    ) : (
        <div className="menu">
            <div>
                <h1>RestaurantMenu id: {resId}</h1>
                <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}⭐</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item) => (
                            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

export default RestaurantMenu;