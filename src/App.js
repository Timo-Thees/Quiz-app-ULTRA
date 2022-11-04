import "./App.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Card } from "./components/Card";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    question: "Testfrage",
    answer: "Testantwort",
    tags: ["a", "b"],
    bookmarked: false,
  },
  {
    id: 2,
    question: "Testfrage 2",
    answer: "Testantwort 2",
    tags: ["c", "d"],
    bookmarked: true,
  },
];

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
    <div className="app">
      {/* <Header /> */}
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
