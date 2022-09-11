import { useState } from 'react';
import type { InferGetServerSidePropsType, NextPage, GetServerSideProps } from 'next';
import MemberList from '../components/memberList';
import { request } from '../utils/fetch';
import { httpMethod } from '../utils/constants/httpMethod';
import { MemberListType } from '../utils/constants/interface';
import { Button } from '../components/UI';

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await request('/members?groups=&groupSize=', httpMethod.get);
  const memberList: MemberListType = await response.json();
  return {
    props: { memberList },
  };
};

const Home: NextPage = ({ memberList }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [members, setMembers] = useState(memberList);
  const saveMemberList = (id: string, name: string) => {
    return setMembers(prevData => {
      return [...prevData, { id, name }];
    });
  };

  return (
    <>
      <h1>Random Lunch</h1>
      <input type="text" />
      <Button type="submit">추가</Button>
      <MemberList members={members} />
    </>
  );
};

export default Home;
