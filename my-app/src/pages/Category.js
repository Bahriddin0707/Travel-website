import React,{useState,useEffect} from "react"
import {useParams, useHistory,useLocation} from "react-router-dom";
import {getFilterCategory, getMealById} from "./api";
import MealList from "../components/MealList/MealList";
import Loader from "../components/Loader/Loader";

const Category = () => {
  const [meals,setMeals]=useState([]);
  const {name}=useParams();

  useEffect(()=>{
    getFilterCategory(name).then((data)=>{
      setMeals(data.meals);
    });
  },[name]);


  //const {value1}=useParams();
  //const {goBack}=useHistory();
  //const location=useLocation();

  return (
      <div>
        {
          !meals.length ? <Loader /> : <MealList meals={meals} />
        }
      </div>
  );
};

export default Category;
