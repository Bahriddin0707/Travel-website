import React from 'react';
import {Link} from "react-router-dom";
import slyles from "../CategoryItem/CategoryItem.module.css";
import {useParams} from "react-router-dom";

const MealItem = ({meal}) => {
  const {strMeal,strMealThumb,idMeal}=meal;
  const {id}=useParams();

  return (
      <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
          <span className="card-title">{strMeal}</span>
        </div>
        <div className="card-content">

        </div>
        <div className="card-action">
          <Link to={`/meal/${idMeal}`} className={`btn`}>Watch Recipe</Link>
        </div>
      </div>
  );
};

export default MealItem;
