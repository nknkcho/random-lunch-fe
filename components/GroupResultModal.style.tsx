import styled from 'styled-components';

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 300px;
  min-height: 100vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const CloseButton = styled.button`
  float: right;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border-style: none;
  width: 30px;
  height: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.5;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin: 40px 0;
  text-align: center;
`;

export { ModalBackground, ModalContainer, CloseButton, ModalTitle };
