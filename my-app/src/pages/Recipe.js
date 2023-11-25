import React,{useEffect,useReducer,useState} from 'react';
import {useParams,useHistory} from "react-router-dom";
import {getMealById} from "./api";
import Loader from "../components/Loader/Loader";
import styles from "./Recipe.module.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Recipe = () => {
  const [recipe,setRecipe]=useState([]);
  const [showRecipe,setShowRecipe]=useState(false);
  const {id}=useParams();
  const {goBack}=useHistory();

  function handeClick(){
    setShowRecipe((prevState)=>!prevState);
  }

  useEffect(()=>{
    getMealById(id).then((data)=>{
      setRecipe(data.meals[0])
    });

  },[])

  return (
      <div>
        <button className={styles.btn} onClick={goBack}>Go Back</button>
        {
          !recipe.idMeal ? <Loader /> : (
             <div className={styles.recipe}>
               <img src={recipe.strMealThumb} className={styles.img} alt={recipe.strMeal}/>
               <h2>Meal: {recipe.strMeal}</h2>
               <p className={styles.redColor}>Category: {recipe.strCategory}</p>
               {
                 recipe.strArea ? <h6 className={styles.strArea}>Area: {recipe.strArea}</h6> : null
               }
               <p className={styles.strInstructions}>{recipe.strInstructions}</p>

               <button className={`btn ${styles.showRecipe}`} onClick={handeClick}>
                 {
                   !showRecipe ? "Show Recipe" :"Hide Recipe"
                 }
               </button>
               {
                 showRecipe ?  <table>
                   <thead>
                   <tr>
                     <th>Ingredient</th>
                     <th>Measure</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                     Object.keys(recipe).map((key)=>{
                       if(key.includes("strIngredient") && recipe[key]){
                         return (
                             <tr>
                               <td>{recipe[key]}</td>
                               <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                             </tr>
                         )
                       }
                     })
                   }
                   </tbody>
                 </table> : null
               }

               {recipe.strYoutube ? (
                   <div className={styles.row}>
                     <h5>Video Recipe</h5>
                     <iframe allowFullScreen src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id} />
                   </div>
               ) : null}
             </div>
         )}
      </div>
  );
};

export default Recipe;
