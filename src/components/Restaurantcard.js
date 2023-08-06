const Restaurantcard = (props) =>{

    const{name,cuisines,rating,imageurl,deliverytime,cost} = props.restaurant_details;
    return(
      <div className='restaurant-card'>
         <img src={imageurl}alt="img">
         </img>
         <div className='rescard-details'>
          <div><h2>{name}</h2>
          <span>{cuisines}</span>
         </div>
        <div>
          <h5>{rating}</h5>
          <span>{cost}</span>
          <h4>{deliverytime}</h4>
        </div>
          
         </div>
      
      </div>
          
      
    );
    };
    export default Restaurantcard;