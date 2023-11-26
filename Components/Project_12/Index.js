import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

import "./index.css";

const Index = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};
export default Index;