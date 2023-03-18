import Card from "@mui/material/Card";

import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Item({item, handleAddItemToCart }) {
    
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.title}
          height="200"
          image={item.image}
          title={item.title}
        />
        <CardContent>
          {item.description}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="secondary">
          $ {item.price}
        </Button>
        <Button size="small" color="primary" onClick = { () => handleAddItemToCart(item)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}