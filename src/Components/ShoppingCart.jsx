import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart({
  cartList,
  setCartList,
  sum,
  setSum,
  cartCount,
  setCartCount,
  listItem,
  setListItem,
}) {
  const updateCart = (data) => {
    setCartList(cartList.filter((todo) => todo.id !== data.id));
    setSum(sum - data.price);
    setCartCount(cartCount - 1);
    setListItem(
      listItem.map((d1)=>{
      if(d1.id === data.id){
        return{...d1,inCart : false}
      }
      return d1;
    }));
  };

  const updateCartAll = () => {
    setCartList([]);
    setSum(0);
    setCartCount(0);
    setListItem(
      listItem.map((d1)=>{
      return {...d1,inCart : false};
    }));
  };

  return (
    <div className="container">
      <div className="cart-box">
        <h1 className="heading">
          <span>Shopping Cart</span>
        </h1>

        {sum > 0 &&
          cartList.map((data, key) => {
            return (
              <div key={key}>
                <div className="row">
                  <div className="col-2">
                    <img src={data.url} alt="" />
                  </div>
                  <div className="col-8">
                    <h2>{data.title}</h2>
                  </div>
                  <div className="col-2 price">
                    <p>${data.price}</p>
                    <a onClick={(event) => updateCart(data)}>remove</a>
                  </div>
                </div>
              </div>
            );
          })}
        {sum == 0 && (
          <div className="row oops">
            <div className="col-2"></div>
            <div className="col-8">Oops! no item in cart :(</div>
            <div className="col-2"></div>
          </div>
        )}
        <div className="total-row">
          <div className="row">
            <div className="col-10 total">Sub-Total</div>
            <div className="col-2 tprice">
              <p>${sum}</p>
              <a onClick={(event) => updateCartAll()}>remove all</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9"></div>
          <div className="col-3">
            <input type="submit" value="Checkout" className="btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
