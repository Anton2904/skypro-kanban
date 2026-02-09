import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { Card, Form, HelperLink, HelperLinkWrapper, HelperText, Input, Page, PrimaryButton, Title } from "../_shared/AuthLayout.styled";

function RegisterPage() {
  const navigate = useNavigate();
  const { isAuth, register } = useAuth();
  const [name, setName] = useState("");
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
    if (!name.trim()) {
      setFormError("Введите имя");
      return;
    }
    if (!loginValue.trim()) {
      setFormError("Введите логин");
      return;
    }
    if (!password.trim()) {
      setFormError("Введите пароль");
      return;
    }

    setIsSubmitting(true);
    register({ login: loginValue.trim(), name: name.trim(), password })
      .then(() => navigate("/", { replace: true }))
      .catch((err) => setFormError(err?.message || "Ошибка регистрации"))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Page>
      <Card>
        <Title>Регистрация</Title>

        <Form onSubmit={handleSubmit}>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" />
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
            autoComplete="new-password"
          />

          {formError ? <div style={{ color: "#c00", fontSize: 14 }}>{formError}</div> : null}

          <PrimaryButton type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
            {isSubmitting ? "Регистрируем..." : "Зарегистрироваться"}
          </PrimaryButton>
        </Form>

        <HelperText>Уже есть аккаунт?</HelperText>
        <HelperLinkWrapper to="/login">
          <HelperLink>Войдите здесь</HelperLink>
        </HelperLinkWrapper>
      </Card>
    </Page>
  );
}

export default RegisterPage;
