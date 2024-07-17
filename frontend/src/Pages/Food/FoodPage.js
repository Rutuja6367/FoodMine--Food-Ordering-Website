import React, { useEffect, useState } from 'react'
import classes from './FoodPage.module.css';
import { useParams } from 'react-router-dom';
import { getByid } from '../../Services/FoodService';
import StarRating from '../../Components/Header/StarRating/StarRating';
import Tags from '../../Components/Tags/Tags';
import Price from '../../Components/Header/Price/Price';

function FoodPage() {

    const [food, setFood] = useState({});
    const {id} = useParams();
    console.log("id", id);
    useEffect(() =>{
        getByid(id).then(setFood);
    },[id])

  return (
    <div>{
        
        food && (
        <div className={classes.container}>
            <img className={classes.image} src={`/foods/${food.imageUrl}`} alt={food.name}>
            </img>
            <div className={classes.details}>
                <div className={classes.header}>
                    <span className={classes.name}>
                        {food.name}
                    </span>
                    <span className={`${classes.favorite} ${food.favorite ? '' : classes.not}`}>
                    ❤ 
                    </span>
                </div>
                <div className={classes.rating}>
                    <StarRating stars={food.stars} size={25}/>
                    </div>
                    <div className={classes.origin}>
                        {food.origins?.map(origin=>(
                            <span key={origin}>{origin}</span>
                        ))}
                    </div>
                    <div className={classes.tags}>
                        {food.tags && (
                            <Tags tags={food.tags.map(tag => ({name:tag}))} forFoodPage={true}/>
                        )}
                      </div>
                     <div className={classes.cook_time}>
                        <span>
                            Time to cook about <strong>{food.cookTime}</strong> minutes
                        </span>
                        </div>
                        <div className={classes.price}>
                            <Price price={food.price}/>
                        </div>
                        <button>ADD TO CART</button>
                        </div>
        </div>
    )}
    </div>
   
  )
}

export default FoodPage;
