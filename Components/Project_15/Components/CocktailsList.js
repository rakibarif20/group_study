import React from "react";
import Loading from "../Loading";
import Cocktails from "../Cocktails";

import { useGlobalContext } from "../context";

const CocktailsList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">No cockttail matched your search criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="section-center cocktail-grid">{cocktails.map((item) => {
        return <Cocktails key={item.id} {...item} />
      })}</div>
    </section>
  );
};

export default CocktailsList;
