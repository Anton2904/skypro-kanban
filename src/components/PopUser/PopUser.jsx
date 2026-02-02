import { useState } from "react";
import { ButtonRow, Modal, Overlay, PrimaryButton, SecondaryButton, Title } from "./PopExit.styled";
import { ExitButton, Mail, Name, PopUserRoot, ThemeRow, ThemeToggle } from "./PopUser.styled";

function PopUser({ isOpen }) {
  const [isExitOpen, setIsExitOpen] = useState(false);

  return (
    <>
      <PopUserRoot $isOpen={isOpen}>
        <Name>Ivan Ivanov</Name>
        <Mail>ivan.ivanov@gmail.com</Mail>

        <ThemeRow>
          <p>Темная тема</p>
          <ThemeToggle name="checkbox" />
        </ThemeRow>

        <ExitButton type="button" onClick={() => setIsExitOpen(true)}>
          Выйти
        </ExitButton>
      </PopUserRoot>

      {isExitOpen ? (
        <Overlay role="dialog" aria-modal="true" onClick={() => setIsExitOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <Title>Выйти из аккаунта?</Title>

            <ButtonRow>
              <PrimaryButton type="button" onClick={() => (window.location.href = "modal/signin.html")}>
                Да, выйти
              </PrimaryButton>

              <SecondaryButton type="button" onClick={() => setIsExitOpen(false)}>
                Нет, остаться
              </SecondaryButton>
            </ButtonRow>
          </Modal>
        </Overlay>
      ) : null}
    </>
  );
}

export default PopUser;
