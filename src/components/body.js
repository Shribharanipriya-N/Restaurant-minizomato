import Restaurantcard from "./Restaurantcard";
import { restaurant_data } from "../common/data";
import { useState } from "react";
import { Link } from "react-router-dom";



const Body= () =>{

    const [searchtext,setSearchtext] = useState("");
    const [filteredrestaurant,setFilteredrestaurant] =
     useState(restaurant_data);
    function Handleonchangeevent (a){
       setSearchtext(a.target.value);
    }
    function filteringrestaurant(){
        const filterData=restaurant_data.filter(restaurant => {
           return  restaurant.cuisines.toLowerCase().includes(searchtext.toLowerCase());
        });

        setFilteredrestaurant(filterData);
        console.log("filtered restaurant",filteredrestaurant);
    }
   
    return(
    <>
    <div className='searchbar'>
    <input type='text' onChange={Handleonchangeevent}></input>
    <button onClick={filteringrestaurant}>Search</button>
    </div>
    <h2>Best Foods in Coimbatore</h2>
    <div className='res-container'>
  
    {filteredrestaurant.map((restaurant) => {
        return (
          <Link key={restaurant.id}
          to={`/restaurant/${restaurant.id} `}style={{textDecoration:'none'}}>
        <Restaurantcard 
        key={restaurant.id}
        restaurant_details={restaurant} />;
        </Link>
        );
      })
    }
    </div>
    </>
    );
  };

  export default Body;