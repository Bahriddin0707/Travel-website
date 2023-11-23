import {Link} from "react-router-dom";
import slyles from "./CategoryItem.module.css";


function CategoryItem({item=[]}){
  const {idCategory,strCategory,strCategoryThumb,strCategoryDescription}=item;

  return (
      <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategoryThumb} />
            <span className="card-title">{strCategory}</span>
        </div>
        <div className="card-content">
          <p>{strCategoryDescription.slice(0,60)}...</p>
        </div>
        <div className="card-action">
          <Link to={`/category/${strCategory}`} className={`btn ${slyles.link}`}>Watch Category</Link>
        </div>
      </div>
  );
};

export {CategoryItem};
