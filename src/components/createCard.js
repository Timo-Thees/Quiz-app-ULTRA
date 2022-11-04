import { useState } from "react";
import cardData from "./CardData";

const createCard = (existingCards) => {
  const [cards, setCards] = useState(cardData);
  function createNewCard(existingCards, inputData) {}

  return (
    <form>
      <label for="question">Write a question</label>
      <input type="text" id="question" />
      <label for="answer">Write the answer</label>
      <input type="text" id="answer" />
      <label for="tags">Write your tags. Seperate tags with #.</label>
      <input type="text" id="tags" />
      <button type="submit" onClick={createNewCard}>
        Create question
      </button>
    </form>
  );
};

export { createCard };
