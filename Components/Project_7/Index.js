import React, { useEffect, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import Data from "./Data";
import "./index.css";

const Index = () => {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    console.log('use One');
  }, [index, people]);
  useEffect(() => {
    const slide = 
    setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return ()=> clearInterval(slide)
  }, [index]);
  console.log('use Two');
  return (
    <section className="section">
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, indexPerson) => {
          const { id, name, image, title, quate } = person;

          let position = "nextSlide";
          if (indexPerson === index) {
            position = "activeSlide";
          }
          if (indexPerson === index - 1 || (index === 0 && indexPerson === people.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text"> {quate}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronsLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronsRight />
        </button>
      </div>
    </section>
  );
};

export default Index;
