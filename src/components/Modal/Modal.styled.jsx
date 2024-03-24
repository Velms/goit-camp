import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 20;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px;
  display: inline-flex;
  flex-direction: column;
  width: 90vh;
  max-width: 902px;
  max-height: 90vh;
  gap: 24px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 50px;
    margin: 25px 0;
  }
`;

export const CloseButton = styled.svg`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 32px;
  height: 32px;
  fill: none;
  stroke: #101828;
  cursor: pointer;
`;
