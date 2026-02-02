import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaeef6;
  padding: 24px;
`;

const Box = styled.div`
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  padding: 44px 50px 36px;
  text-align: center;
`;

const Code = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 0 0 20px;
  font-size: 18px;
  color: #94a6be;
`;

const Btn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  background: #565eef;
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
`;

function NotFoundPage() {
  return (
    <Wrap>
      <Box>
        <Code>404</Code>
        <Text>Страница не найдена</Text>
        <Btn to="/">На главную</Btn>
      </Box>
    </Wrap>
  );
}

export default NotFoundPage;
