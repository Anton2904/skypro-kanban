import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Card, Form, HelperLink, HelperText, Input, Page, PrimaryButton, Title } from "../_shared/AuthLayout.styled";

function RegisterPage({ isAuth, setIsAuth }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuth) navigate("/", { replace: true });
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // учебный сценарий: регистрация через UI
    setIsAuth(true);
    navigate("/", { replace: true });
  };

  return (
    <Page>
      <Card>
        <Title>Регистрация</Title>

        <Form onSubmit={handleSubmit}>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" />
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
            autoComplete="new-password"
          />

          <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
        </Form>

        <HelperText>Уже есть аккаунт?</HelperText>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <HelperLink>Войдите здесь</HelperLink>
        </Link>
      </Card>
    </Page>
  );
}

export default RegisterPage;
