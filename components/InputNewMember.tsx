import { useState } from 'react';
import { DefaultButton } from './UI';
import { Form } from './InputNewMember.style';
import { request } from '../utils/fetch';
import { httpMethod } from '../utils/constants/httpMethod';

const MemberInput = (props: { onSaveMemberList: Function }) => {
  const { onSaveMemberList } = props;
  const [name, setName] = useState('');
  const getNameHandler = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const nameSubmitHandler = async (e: { preventDefault: Function }) => {
    e.preventDefault();
    if (name.trim().length === 0) return alert('이름을 입력하세요');

    const newName = { name };
    const createNameRequest = await request('/members', httpMethod.POST, newName, {
      'Content-Type': 'application/json',
    });
    if (createNameRequest.status === 409) return alert('중복된 이름은 등록할 수 없습니다');

    const createNameResponse = await createNameRequest.json();
    onSaveMemberList(createNameResponse[0].id, createNameResponse[0].name);
    return setName('');
  };

  return (
    <Form onSubmit={nameSubmitHandler}>
      <input type="text" placeholder="이름을 입력하세요" value={name} onChange={getNameHandler} />
      <DefaultButton type="submit">추가</DefaultButton>
    </Form>
  );
};

export default MemberInput;
