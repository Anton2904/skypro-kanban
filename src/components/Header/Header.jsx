import { useState } from "react";
import PopUser from "../PopUser";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self" rel="noreferrer">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>

          <div className="header__logo _dark">
            <a href="" target="_self" rel="noreferrer">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>

          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>

            <button
              type="button"
              className="header__user _hover02"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
            >
              Ivan Ivanov
            </button>

            <PopUser isOpen={isUserMenuOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
