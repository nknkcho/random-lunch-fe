import MemberItem from './MemberItem';
import { MemberListContainer } from './MemberList.style';

interface Member {
  member: Object;
  id: string;
  name: string;
}

const MemberList = (props: { members: [] }) => {
  const { members } = props;
  return (
    <MemberListContainer>
      {members.map((member: Member) => {
        return <MemberItem member={member} key={member.id} />;
      })}
    </MemberListContainer>
  );
};

export default MemberList;
