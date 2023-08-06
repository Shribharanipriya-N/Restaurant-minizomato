import { useParams } from "react-router-dom";
import { restaurant_data } from "../common/data";

const RestaurantDetails = () => {
    const { resId } = useParams();
    console.log(resId);
    const filteredRestaurant = restaurant_data.filter((detail) => {
      return detail.id == resId;
    });


  const { name, cuisines, rating, imageurl } = filteredRestaurant[0];

  return (
    <>
      <div className="resPageDetails">
        <img src={imageurl} className="resPageImg"></img>
        <div className="resPageBottom">
          <div className="resPageInfo">
            <h2>Name :</h2>
            <h3>{name}</h3>
          </div>
          <div className="resPageInfo">
            <h2>Cuisines :</h2>
            <h4>{cuisines}</h4>
          </div>
          <div className="resPageInfo">
            <h2>Rating :</h2>
            <h3>{rating}</h3>
          </div>
        </div>
      </div>
    </>
     );
   };
export default RestaurantDetails;