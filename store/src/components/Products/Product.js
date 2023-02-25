import "../Products/Product.css";
import Button from '@mui/material';


const Product = ({ image, title, price }) => {
    return (
      <div className="product-card">
        <div className="product-image">
          <img alt={"alt"} src={image} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
        </div>
        <Button>add</Button>
       
      </div>
    );
  };
  
  export default Product;