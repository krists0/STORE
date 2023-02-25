import "../Header/Header.css"
import React,{useState} from "react";
import mike from"../../images/mike.png";
const category='';

const Header = ({products,filterByCategory}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
  categories.unshift("All");
  console.log(category);
  

  
  return (
    <nav className="product-filter">
     
      <h1> <img className="logo "src={mike} width="10%" height="10%" />
         Mike store 

      </h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            className="category"
            onChange={(event) => filterByCategory(event.target.value)}
          >
          
          {
          categories.map(category => <option key={category}>{category}</option>)
        
          }
          </select>
          
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
  </nav>
  );
};




export default Header;

/**
 * 
<div className="sort">
  <div className="collection-sort">
    <label>Filter by:</label>
    <select
      className="category"
      onChange={(event) => filterByCategory(event.target.value)}
    >
     
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  </div>

  <div className="collection-sort">
    <label>Sort by:</label>
    <select>
      <option value="/">Featured</option>
      <option value="/">Best Selling</option>
      <option value="/">Alphabetically, A-Z</option>
      <option value="/">Alphabetically, Z-A</option>
      <option value="/">Price, low to high</option>
      <option value="/">Price, high to low</option>
      <option value="/">Date, new to old</option>
      <option value="/">Date, old to new</option>
    </select>
  </div>
</div>
 */


/**
 * const categoryOption=()=>{
    const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
    
    categories.unshift("All");
    const options = categories.map(category => <option key={category}>{category}</option>);
    
    return options;
  };
   
 */