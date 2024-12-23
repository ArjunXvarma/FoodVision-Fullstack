import React from "react";

const TopSection: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-2">
      <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
        🍲 🍔 🍚 🍣 🍰
      </div>
      <p className="text-center">
        Welcome to the Food Prediction App. Upload an image of food, and we'll identify it with confidence!
      </p>
      <p className="text-center">
        We can only identify Chicken Curry, Chicken Wings, Fried Rice, Grilled Salmon, Hamburger, Ice Cream, Pizza, Ramen, Steak, and Sushi.
      </p>
    </div>
  );
};

export default TopSection;
