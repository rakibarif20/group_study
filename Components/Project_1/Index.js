import React, { useState } from "react";
import Data from "./Data";
import List from "./List";
import "./index.css";

const Index = () => {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Brithday Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default Index;
