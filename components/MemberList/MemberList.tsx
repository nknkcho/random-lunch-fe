import MemberItem from './MemberItem';
import { MemberListContainer } from './MemberList.style';

interface Members {
  members: [];
}

interface Member {
  member: Object;
  id: string;
  name: string;
}

const MemberList = ({ members }: Members) => {
  return (
    <MemberListContainer>
      {members.map((member: Member) => {
        return <MemberItem member={member} key={member.id} />;
      })}
    </MemberListContainer>
  );
};

export default MemberList;
