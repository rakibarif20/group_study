import React from "react";
import { useGlobalContext } from "./context";
import './index.css'

import Navbar from "./Navbar";
import CartContainer from "./CardContainers";
const Index = () => {
  const {loading} = useGlobalContext()
  if(loading){
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default Index;
