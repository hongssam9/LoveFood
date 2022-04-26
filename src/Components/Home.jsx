import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const userFood = [
  "https://spoonacular.com/recipeImages/715544-556x370.jpg",
  "https://spoonacular.com/recipeImages/645978-556x370.jpg",
  "https://spoonacular.com/recipeImages/716279-556x370.jpg",
  "https://spoonacular.com/recipeImages/689453-556x370.jpg",
];

const Home = () => {
  // const foodRandomizer = Math.floor(Math.random() * foodType.length)
  // const foodSelection = foodType[foodRandomizer]
  const [food, setFood] = useState({});
  const apik = process.env.REACT_APP_FOOD_API_KEY;
  const foodUrl = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${apik}`;
  // const foodUrlCate = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${}&number=1&apiKey=${apik}`;
  // const foodUrlQuery = `https://api.spoonacular.com/recipes/complexSearch?query=${}&number=1&apiKey=${apik}`;
  useEffect(() => {
    urlFetch();
  }, []);

  const urlFetch = () => {
    fetch(foodUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        console.log(json.recipes[0].image);
        setFood(json);
      })
      .catch((err) => console.log("something went wrong...", err));
  };

  const handleYah = () => {
    userFood.push(food.recipes[0].image);
  };
  console.log(userFood);

  return (
    <div className="main-container">
      
      {Object.keys(food).length ? (
        <img src={food.recipes[0].image} alt="Random Food" className = "foodpic"/>
      ) : (
        "no images"
      )}
      <div>
        <button className="yesno" id="yah" onClick={() => urlFetch() & handleYah()}>Yah</button>
      </div>
      <div >
        <button className="yesno" id="nah" onClick={() => urlFetch()}>Nah</button>
      </div>
      <Link
        to={{
          pathname: "/Checkout",
          state: { userFood },
        }}
      >
        <button id="checkoutButton">Checkout</button>
      </Link>
    </div>
  );
};

export default Home;
