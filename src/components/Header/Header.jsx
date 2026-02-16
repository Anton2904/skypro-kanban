import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import PopUser from "../PopUser";
import { Container } from "../../styles/Common.styled";
import { HeaderBlock, HeaderRoot, Logo, Nav, NewTaskButton, UserButton } from "./Header.styled";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <Link to="/" target="_self" rel="noreferrer">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="header__logo _dark">
            <Link to="/" target="_self" rel="noreferrer">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </div>

          <nav className="header__nav">
            <button
              type="button"
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={() => navigate("/new-card")}
            >
              Создать новую задачу
            </button>

            <button
              type="button"
              className="header__user _hover02"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
            >
              {user?.name || user?.login || "Пользователь"}
            </button>

            <PopUser isOpen={isUserMenuOpen} />
          </Nav>
        </HeaderBlock>
      </Container>
    </HeaderRoot>
  );
}

export default Header;
