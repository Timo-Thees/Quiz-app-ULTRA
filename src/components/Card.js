import "./Card.css";

function Card({ card, onBookmarkToggle }) {
  const handleBookmarkToggle = () => {
    onBookmarkToggle(card.id);
  };
  return (
    <div>
      <img
        src={
          card.bookmarked
            ? "/icons/lesezeichen-schwarze-form.png"
            : "/icons/lesezeichen-weiss.png"
        }
        alt="Bookmark this question"
        className="bookmarks_unclicked"
        data-js="bookmark"
        onClick={handleBookmarkToggle}
      />
      <p className="hidden" data-js="question_text">
        {card.question}
      </p>
      <button className="Showanswer" data-js="showanswer_button">
        Show Answer
      </button>
      <button className="Categories">#HTML </button>
      <button className="Categories">#Flexbox</button>
      <button className="Categories">#CSS</button>
    </div>
  );
}

export { Card };
