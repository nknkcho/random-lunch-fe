import React, { useReducer, useCallback } from 'react';
import GroupOption from './GroupOption';
import { DefaultButton } from './UI';
import { GroupOptionWrapper } from './CreateGroups.style';

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

const CreateGroups = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { groups, groupSize } = state;
  const onIncrease = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLTextAreaElement;
    dispatch({ type: 'INCREMENT', value });
  }, []);

  const onDecrease = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLTextAreaElement;
    dispatch({ type: 'DECREMENT', value });
  }, []);
  return (
    <>
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
      <DefaultButton type="button">그룹 만들기</DefaultButton>
    </>
  );
};

export default CreateGroups;
