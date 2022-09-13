import React from 'react';
import { GroupOptionContainer, UpDownContainer } from './GroupOption.style';
import { DefaultButton } from './UI';

interface Props {
  optionTitle: string;
  number: number;
  value: string;
  onDecrease: React.MouseEventHandler<HTMLButtonElement>;
  onIncrease: React.MouseEventHandler<HTMLButtonElement>;
}

const GroupOption = ({ optionTitle, number, value, onDecrease, onIncrease }: Props) => {
  return (
    <GroupOptionContainer>
      <span>{optionTitle}</span>
      <UpDownContainer>
        <DefaultButton type="button" onClick={onDecrease} value={value}>
          -
        </DefaultButton>
        {number}
        <DefaultButton type="button" onClick={onIncrease} value={value}>
          +
        </DefaultButton>
      </UpDownContainer>
    </GroupOptionContainer>
  );
};

export default GroupOption;
