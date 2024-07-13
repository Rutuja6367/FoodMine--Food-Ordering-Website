import React, { useEffect, useState } from 'react'
import classes from './FoodPage.module.css';
import { useParams } from 'react-router-dom';
import { getByid } from '../../Services/FoodService';

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
                    <span className={`${classes.favorite} ${food.favorite ? '' : classes.not}`}></span>
                    ❤ 
                </div>
        </div>
        </div>
    )}
    </div>
   
  )
}

export default FoodPage;
