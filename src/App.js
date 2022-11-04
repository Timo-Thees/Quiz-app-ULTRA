import "./App.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Card } from "./components/Card";
import { useState } from "react";
import cardData from "./components/CardData";

function App() {
  const [cards, setCards] = useState(cardData);
  const [currentPage, setCurrentPage] = useState("home");

  const handleBookmarkToggle = (id) => {
    setCards(
      cards.map((card) => {
        if (id === card.id) {
          return { ...card, bookmarked: !card.bookmarked };
        } else {
          return card;
        }
      })
    );
  };

  return (
    <div className="app main">
      <Header />
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            onBookmarkToggle={(id) => {
              handleBookmarkToggle(id);
            }}
          />
        );
      })}

      <Navigation
        currentPage={currentPage}
        onNavChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
}

export default App;
