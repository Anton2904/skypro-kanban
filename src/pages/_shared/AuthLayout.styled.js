import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaeef6;
  padding: 24px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  padding: 44px 50px 36px;
`;

export const Title = styled.h1`
  margin: 0 0 32px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  color: #000000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #d4dbe5;
  border-radius: 8px;
  font-size: 16px;
  color: #1a1a1a;
  outline: none;

  ::placeholder {
    color: #94a6be;
  }

  &:focus {
    border-color: #565eef;
    box-shadow: 0 0 0 3px rgba(86, 94, 239, 0.15);
  }
`;

export const PrimaryButton = styled.button`
  margin-top: 8px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background: #565eef;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.98);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const HelperText = styled.p`
  margin: 18px 0 0;
  text-align: center;
  font-size: 16px;
  color: #94a6be;
`;

export const HelperLink = styled.span`
  display: inline-block;
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  color: #94a6be;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #565eef;
  }
`;
