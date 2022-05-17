import React from "react";
import Featured from "../Featured";
import NewsLetter from "../NewsLetter";

function FeaturedPage({
  cartList,
  setCartList,
  listItem,
  setListItem,
  sum,
  setSum,
  cartCount,
  setCartCount
}) {
  return (
    <>
      <Featured
        cartList={cartList}
        setCartList={setCartList}
        listItem={listItem}
        setListItem={setListItem}
        sum={sum}
        setSum={setSum}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      <NewsLetter />
    </>
  );
}

export default FeaturedPage;
