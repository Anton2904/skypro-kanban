import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { Card, Form, HelperLink, HelperLinkWrapper, HelperText, Input, Page, PrimaryButton, Title } from "../_shared/AuthLayout.styled";

function LoginPage() {
  const navigate = useNavigate();
  const { isAuth, login } = useAuth();
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuth) navigate("/", { replace: true });
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    if (!loginValue.trim()) {
      setFormError("Введите логин");
      return;
    }
    if (!password.trim()) {
      setFormError("Введите пароль");
      return;
    }

    setIsSubmitting(true);
    login({ login: loginValue.trim(), password })
      .then(() => navigate("/", { replace: true }))
      .catch((err) => setFormError(err?.message || "Ошибка авторизации"))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Page>
      <Card>
        <Title>Вход</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            placeholder="Логин"
            type="text"
            autoComplete="username"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            type="password"
            autoComplete="current-password"
          />

          {formError ? <div style={{ color: "#c00", fontSize: 14 }}>{formError}</div> : null}

          <PrimaryButton type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
            {isSubmitting ? "Входим..." : "Войти"}
          </PrimaryButton>
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
