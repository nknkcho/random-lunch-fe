import React, { useState } from 'react';
import { DeleteButton } from '../UI/UI';
import { ItemContainer } from './MemberItem.style';
import { MemberListType } from '../../utils/constants/interface';
import { request } from '../../utils/fetch';
import { httpMethod } from '../../utils/constants/httpMethod';

interface Member {
  member: MemberListType;
}

const MemberItem = ({ member }: Member) => {
  const [memberItem, setMemberItem] = useState(member);
  const deleteMemberNameHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLTextAreaElement;
    const response = await request(`/members/${value}`, httpMethod.DELETE);
    if (response.ok) {
      setMemberItem({ id: '', name: '' });
      return alert(`${value}이(가) 삭제되었습니다.`);
    }
    return alert('오류가 발생했습니다. 페이지를 다시 실행하세요');
  };

  if (memberItem.name === '') {
    return null;
  }
  return (
    <ItemContainer key={member.id}>
      <li>{member.name}</li>
      <DeleteButton type="button" value={member.name} onClick={deleteMemberNameHandler}>
        삭제
      </DeleteButton>
    </ItemContainer>
  );
};

export default MemberItem;
