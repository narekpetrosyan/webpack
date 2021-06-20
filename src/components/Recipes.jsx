import { useState } from "react";

const object = {
  leatherStrips: 2,
  ironIngot: 1,
  refineMoonstone: 4,
};

const object2 = {
  ...object,
  letter: 6,
};

export const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current recipe:</h3>
      <button onClick={() => setRecipe(object)}>Load</button>
      <button onClick={() => setRecipe(object2)}>Load2</button>

      <ul>
        {Object.keys(recipe).map((rc, index) => {
          return (
            <li key={index}>
              {rc}: {recipe[rc]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
