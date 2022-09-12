import { useState } from 'react';
import { Button } from './UI';
import { Form } from './MemberInput.style';
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
    if (name.trim().length === 0) {
      return alert('이름을 입력하세요');
    }

    const newName = { name };
    const createNameRequest = await request('/members', httpMethod.POST, newName, {
      'Content-Type': 'application/json',
    });
    const createNameResponse = await createNameRequest.json();
    onSaveMemberList(createNameResponse[0].id, createNameResponse[0].name);
    return setName('');
  };

  return (
    <Form onSubmit={nameSubmitHandler}>
      <input type="text" placeholder="이름을 입력하세요" value={name} onChange={getNameHandler} />
      <Button type="submit">추가</Button>
    </Form>
  );
};

export default MemberInput;
