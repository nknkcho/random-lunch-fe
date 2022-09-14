import { useState } from 'react';
import type { InferGetServerSidePropsType, NextPage, GetServerSideProps } from 'next';
import InputNewMember from '../components/InputNewMember/InputNewMember';
import MemberList from '../components/MemberList/MemberList';
import CreateGroups from '../components/CreateGroups/CreateGroups';
import { request } from '../utils/fetch';
import { httpMethod } from '../utils/constants/httpMethod';
import { MemberListType } from '../utils/constants/interface';
import { Container, Title } from '../components/UI/UI';

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await request('/members?groups=&groupSize=', httpMethod.GET);
  const memberList: MemberListType = await response.json();
  return {
    props: { memberList },
  };
};

const Home: NextPage = ({ memberList }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [members, setMembers] = useState(memberList);
  const saveMemberList = (id: string, name: string) => {
    return setMembers((prevData: []) => {
      return [...prevData, { id, name }];
    });
  };
  return (
    <Container>
      <Title>🍴랜덤 런치🍴</Title>
      <InputNewMember onSaveMemberList={saveMemberList} />
      <CreateGroups members={members} />
      <MemberList members={members} />
    </Container>
  );
};

export default Home;
