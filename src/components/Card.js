import "./Card.css";

function Card() {
  return (
    <div>
      <img
        src="/icons/lesezeichen-weiss.png"
        alt="Bookmark this question"
        class="bookmarks_unclicked"
        data-js="bookmark"
      />
      <p className="hidden" data-js="question_text">
        Hier findest du deine gespeicherten Fragen. Bisher hast du keine Fragen
        gespeichert.
      </p>
      <button className="Showanswer" data-js="showanswer_button">
        Show Answer
      </button>
      <button className="Categories" alt="categories">
        #HTML <button className="Categories">#Flexbox</button>
        <button className="Categories">#CSS</button>
      </button>
    </div>
  );
}

export { Card };
