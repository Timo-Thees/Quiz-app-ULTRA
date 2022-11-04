import "./Navigation.css";

function Navigation() {
  return (
    <footer id="fixedFooter">
      <nav>
        <ul>
          <li>
            <a href="index.html">
              <img src="icons/zuhause.png" alt="Home" class="icon" />
            </a>
          </li>
          <li>
            <a href="bookmark.html">
              <img
                src="icons/archiv-black-box.png"
                alt="Bookmarks"
                class="icon"
              />
            </a>
          </li>
          <li>
            <a href="createcard.html">
              <img
                src="icons/add-card.png"
                alt="Write new questions"
                class="icon"
              />
            </a>
          </li>
          <li>
            <a href="profile-page.html">
              <img src="icons/benutzerform.png" alt="Profile" class="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export { Navigation };
