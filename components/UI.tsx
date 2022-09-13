import styled from 'styled-components';

const Container = styled.div`
  padding: 50px 32px;
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

const DefaultButton = styled.button`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border-style: none;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.5;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.5;
  }
`;

export { Container, Title, DefaultButton, DeleteButton };
