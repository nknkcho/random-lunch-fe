import React, { useState, useReducer, useCallback } from 'react';
import GroupOption from './GroupOption';
import { DefaultButton } from './UI';
import { GroupOptionWrapper } from './CreateGroups.style';
import GroupResultModal from './GroupResultModal';
import { request } from '../utils/fetch';
import { httpMethod } from '../utils/constants/httpMethod';

interface Members {
  members: [];
}

const initialState = {
  groups: 0,
  groupSize: 0,
};

const reducer = (state: { [value: string]: number }, action: { type: string; value: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        [action.value]: state[action.value] + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        [action.value]: state[action.value] === 0 ? state[action.value] : state[action.value] - 1,
      };
    default:
      return state;
  }
};

const CreateGroups = ({ members }: Members) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [groupsResult, setGroupResult] = useState([]);
  const { groups, groupSize } = state;
  const [openResultModal, setOpenResultModal] = useState(false);
  const countingMembers = members.length;

  const onIncrease = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLTextAreaElement;
    dispatch({ type: 'INCREMENT', value });
  }, []);

  const onDecrease = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLTextAreaElement;
    dispatch({ type: 'DECREMENT', value });
  }, []);

  const createGroupHandler = async () => {
    if (
      state.groups === 0 ||
      state.groupSize === 0 ||
      state.groups * state.groupSize > countingMembers
    )
      return alert('그룹을 만들 수 없는 옵션입니다.');
    const response = await request(
      `/members?groups=${state.groups}&groupSize=${state.groupSize}`,
      httpMethod.GET
    );
    const groupResultData = await response.json();
    setGroupResult(groupResultData);
    return setOpenResultModal(true);
  };

  return (
    <>
      {openResultModal && (
        <GroupResultModal closeModal={setOpenResultModal} groupsResult={groupsResult} />
      )}
      <GroupOptionWrapper>
        <GroupOption
          optionTitle="전체 그룹 수"
          number={groups}
          value="groups"
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
        <GroupOption
          optionTitle="최소 그룹 사이즈"
          number={groupSize}
          value="groupSize"
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </GroupOptionWrapper>
      <DefaultButton type="button" onClick={createGroupHandler}>
        그룹 만들기
      </DefaultButton>
    </>
  );
};

export default CreateGroups;
