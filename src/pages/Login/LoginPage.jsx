import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Form, HelperLink, HelperLinkWrapper, HelperText, Input, Page, PrimaryButton, Title } from "../_shared/AuthLayout.styled";

function LoginPage({ isAuth, setIsAuth }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuth) navigate("/", { replace: true });
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // учебный сценарий: вход только через UI
    setIsAuth(true);
    navigate("/", { replace: true });
  };

  return (
    <Page>
      <Card>
        <Title>Вход</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Эл. почта"
            type="email"
            autoComplete="email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            type="password"
            autoComplete="current-password"
          />

          <PrimaryButton type="submit">Войти</PrimaryButton>
        </Form>

        <HelperText>Нужно зарегистрироваться?</HelperText>
        <HelperLinkWrapper to="/register">
          <HelperLink>Регистрируйтесь здесь</HelperLink>
        </HelperLinkWrapper>
      </Card>
    </Page>
  );
}

export default LoginPage;
