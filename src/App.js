import React from "react";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Favourite from "./components/Favourite";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';
// import { Container } from './styles';

export default function App() {
  const a= useSelector(props=>props.state);
  var items = a.addedItems.length;
  return (
<>
<div className="topheader">Redux</div>
<Router>
    <nav>
      <ul>
        <li><NavLink exact="true"  to='/' >Home</NavLink></li>
       
        <li><NavLink exact="true"  to={{ pathname: "/Cart" }}>Cart<sup>{items}</sup></NavLink></li>
        <li><NavLink exact="true"  to={{ pathname: "/Favourite" }}>Favourite</NavLink></li>
      </ul>
    </nav>

  <Routes>
    {/* <Route path="/" exact strict component={Home} /> */}
    <Route path='/' exact="true" strict element={<Home/>} />
    <Route path="/Cart" exact="true" strict element={<Cart/>} />
    <Route path="/Favourite" exact="true" strict element={<Favourite/>} />
  </Routes>
</Router>

</>
  );
}
