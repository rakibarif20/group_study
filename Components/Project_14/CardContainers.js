import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";

const CardContainers = () => {
  const { cart,clearItem,total } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">Cart is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
        <header>
          <h2>Your bag</h2>
        </header>
        <div>
            {cart.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr/>
            <div className="cart-total">
                <h4>
                    Total <span>${total}</span>
                </h4>
            </div>
            <button className="btn clear-btn" onClick={clearItem}>
                Clear Cart
            </button>
        </footer>
    </section>
  );
};

export default CardContainers;
