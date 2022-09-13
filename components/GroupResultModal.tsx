import Image from 'next/image';
import closeButtonIcon from '../public/close.svg';
import { ModalBackground, ModalContainer, CloseButton, ModalTitle } from './GroupResultModal.style';
import GroupResultItem from './GroupResultItem';

interface Props {
  closeModal: Function;
  groupsResult: [][];
}

const GroupResultModal = ({ closeModal, groupsResult }: Props) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={() => closeModal(false)} type="button">
          <Image src={closeButtonIcon} alt="Close button of Random lunch" width={15} height={15} />
        </CloseButton>
        <ModalTitle>🍴그룹 결과🍴</ModalTitle>
        <ul>
          {groupsResult.map(groups => {
            return <GroupResultItem groups={groups} key={Math.random()} />;
          })}
        </ul>
      </ModalContainer>
    </ModalBackground>
  );
};

export default GroupResultModal;
