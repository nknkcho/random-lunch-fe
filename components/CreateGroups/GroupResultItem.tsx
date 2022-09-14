import { GroupContainer, GroupItem } from './GroupResultItem.style';

interface Groups {
  groups: [];
}

const GroupResultItem = ({ groups }: Groups) => {
  return (
    <GroupContainer>
      {groups.map((group: { id: string; name: string }) => {
        return <GroupItem key={group.id}>{group.name}</GroupItem>;
      })}
    </GroupContainer>
  );
};

export default GroupResultItem;
