import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img className="image" src="https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=0&k=20&c=_1GwSXSjFeC06w3MziyeqRk5Lx-FMXUZzCpxEOoHyzQ=" alt="pizza" />
      <img className="image" src="https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg" alt="burgers" />
      <img className="image" src="https://thumbs.dreamstime.com/b/veg-grilled-sandwich-served-ketchup-isolated-over-rustic-wooden-background-selective-focus-224440470.jpg" alt="sandwich" />
    </div>
  </div>,
  document.getElementById("root")
);
