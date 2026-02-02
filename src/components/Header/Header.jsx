import { useState } from "react";
import PopUser from "../PopUser";
import { Container } from "../../styles/Common.styled";
import { HeaderBlock, HeaderRoot, Logo, Nav, NewTaskButton, UserButton } from "./Header.styled";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <HeaderRoot>
      <Container>
        <HeaderBlock>
          <Logo>
            <a href="" target="_self" rel="noreferrer">
              <img src="images/logo.png" alt="logo" />
            </a>
          </Logo>

          <Nav>
            <NewTaskButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </NewTaskButton>

            <UserButton type="button" onClick={() => setIsUserMenuOpen((prev) => !prev)}>
              Ivan Ivanov
            </UserButton>

            <PopUser isOpen={isUserMenuOpen} />
          </Nav>
        </HeaderBlock>
      </Container>
    </HeaderRoot>
  );
}

export default Header;
