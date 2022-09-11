import styled from 'styled-components';

const Button = styled.button`
  padding: 2px 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border-style: none;
  color: ${({ theme }) => theme.colors.white};
`;

export { Button };
