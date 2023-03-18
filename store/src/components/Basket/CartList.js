
import CartItem from "./CartItem.js";


const CartList = ({ basketItems,  handleRemoveItemFromBaket }) => {
  const calculeTotal = basketItems.reduce(
    (sum, i) => sum + i.amount * i.price,
    0
  );

  
  return (
    <aside>
      <h1>Cart</h1>
      {console.log("BASKET :"+basketItems)
      
      }
      {basketItems.length === 0 ? <h3>No products yet...</h3> : null}
      <div>
        {basketItems.map((i) => (
        <>
          <CartItem item={i}  handleRemoveItemFromBaket={handleRemoveItemFromBaket}/>
        {console.log("basket item loop "+i.id+"  "+i.title)}
        </>
          ))}
      </div>
      <h2>Total: {calculeTotal.toFixed(2)}</h2>
    </aside>
  );
};
export default CartList;

