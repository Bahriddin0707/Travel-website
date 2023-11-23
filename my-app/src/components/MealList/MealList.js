import React from 'react';
import MealItem from "../MealItem/MealItem";


const MealList = (props) => {
  const {meals}=props;

  return (
      <div className={"list"}>
        {
          meals.map((meal)=>{
            return <MealItem key={meal.idMeal} meal={meal} />
          })
        }
      </div>
  );
};

export default MealList;
