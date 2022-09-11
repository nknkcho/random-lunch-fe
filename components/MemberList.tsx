import { useEffect } from 'react';
import { MemberListType } from '../utils/constants/interface';
import { Button } from './UI';
import { ListContainer } from './MemberList.style';

const MemberList = (props: { members: [] }) => {
  const { members } = props;
  useEffect(() => {}, []);
  return (
    <ul>
      {members.map((member: MemberListType) => {
        return (
          <ListContainer key={member.id}>
            <li>{member.name}</li>
            <Button type="button">삭제</Button>
          </ListContainer>
        );
      })}
    </ul>
  );
};

export default MemberList;
