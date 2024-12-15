import React from "react";
import { culturalHeritages } from "../../constants";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

function Link3() {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/details/${id}`); // Navigate to the details page
  };
  return (
    <section>
      <h1>Cultural Heritages of Nepal</h1>
      <div
        className="flex flex-wrap gap-2
      "
      >
        {culturalHeritages.map((cHeritage, index) => {
          return (
            <Card
              data={cHeritage}
              className="w-1/2 cursor-pointer"
              key={cHeritage.id}
              onClick={() => handleCardClick(cHeritage.id)}
            />
          );
        })}
      </div>
      {JSON.stringify(culturalHeritages)}
    </section>
  );
}

export default Link3;
