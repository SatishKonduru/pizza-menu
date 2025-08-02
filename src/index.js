import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza() {
  return (
    <div>
      <img src="pizzas/prosciutto.jpg" alt="Prosciutto" />
      <h3>Pizza prosciutto</h3>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}

function Header() {
  const myStyle = {
    color: "red",
    fontSize: "48px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1>RSK's Pizza Hut</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <Pizza />
    </main>
  );
}

const Footer = () => {
  const timeNow = new Date().toLocaleTimeString();

  return (
    <footer className="footer">
      <h6>{timeNow} - Currently Open</h6>
    </footer>
  );
};

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Footer />
    </div>
  );
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
