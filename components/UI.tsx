import styled from 'styled-components';

const Container = styled.div`
  padding: 64px 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 10px auto 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border-style: none;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.5;
  }
`;

export { Container, Title, Button };
