import styled from 'styled-components';

const GroupContainer = styled.ul`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
`;

const GroupItem = styled.li`
  margin: 5px 0;
`;

export { GroupContainer, GroupItem };
