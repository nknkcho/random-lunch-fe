import { Button } from './UI';
import { ItemContainer } from './MemberItem.style';
import { MemberListType } from '../utils/constants/interface';

interface Member {
  member: MemberListType;
}

const MemberItem = ({ member }: Member) => {
  return (
    <ItemContainer key={member.id}>
      <li>{member.name}</li>
      <Button type="button">삭제</Button>
    </ItemContainer>
  );
};

export default MemberItem;
