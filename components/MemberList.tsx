import MemberItem from './MemberItem';

interface Member {
  member: Object;
  id: string;
  name: string;
}

const MemberList = (props: { members: [] }) => {
  const { members } = props;
  return (
    <ul>
      {members.map((member: Member) => {
        return <MemberItem member={member} key={member.id} />;
      })}
    </ul>
  );
};

export default MemberList;
