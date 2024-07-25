import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider } from "antd";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDeleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };
  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };
  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={handleDeleteFood} />
      ))}
      </Row>  
    </div>
  );
}

export default App;