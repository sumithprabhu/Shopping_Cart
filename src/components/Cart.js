import { useStore } from '../store/store';

export default function Cart() {
  const cartItems = useStore((state) => state.cartItems);
  const totalPrice = useStore((state) => state.totalPrice);

  return (
    <div className="container mt-4">
      <h3>Shopping Cart</h3>
      <hr/>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h5>{item.name}</h5>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <h5>Total Price: ${totalPrice}</h5>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
