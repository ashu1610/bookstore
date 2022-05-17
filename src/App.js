import React, { useEffect, useState } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import BottomNav from "./Components/BottomNav";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import LoginForm from "./Components/LoginForm";
import ArrivalsPage from "./Components/Pages/ArrivalsPage";
import BlogPage from "./Components/Pages/BlogPage";
import FeaturedPage from "./Components/Pages/FeaturedPage";
import HomePage from "./Components/Pages/HomePage";
import ReviewPage from "./Components/Pages/ReviewPage";
import ShoppingCart from "./Components/ShoppingCart";
import { Books } from "./Components/DataFile";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [listItem, setListItem] = useState(Books);
  const [sum, setSum] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header setShowLogin={setShowLogin} cartCount={cartCount} />

      <BottomNav />

      <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />

      {/* <HomePage/>
    <FeaturedPage/>
    <ArrivalsPage/>
    <ReviewPage/>
    <BlogPage/> */}

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/featured">
          <FeaturedPage
            cartList={cartList}
            setCartList={setCartList}
            listItem={listItem}
            setListItem={setListItem}
            sum={sum}
            setSum={setSum}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        </Route>

        <Route path="/arrivals" component={ArrivalsPage} />
        <Route path="/reviews" component={ReviewPage} />
        <Route path="/blogs" component={BlogPage} />
        <Route path="/cart">
          <ShoppingCart
            cartList={cartList}
            setCartList={setCartList}
            sum={sum}
            setSum={setSum}
            cartCount={cartCount}
            setCartCount={setCartCount}
            listItem={listItem}
            setListItem={setListItem}
          />
        </Route>
      </Switch>

      <Footer />
      <Loader />
    </>
  );
}

export default App;
