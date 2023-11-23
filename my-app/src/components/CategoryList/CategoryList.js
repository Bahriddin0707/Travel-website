import {CategoryItem} from "../CategoryItem/CategoryItem";

function CategoryList ({catalog=[]}){

  return (
      <div className={"list"}>
        {
          catalog.map((el)=>{
           return <CategoryItem key={el.idCategory} item={el}/>
          })
        }
      </div>
  );
}
export {CategoryList};
