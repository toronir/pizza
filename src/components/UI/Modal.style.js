import styled, { css } from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
export const ModalOverlayStyle = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  max-width: 100%;
  animation: slide-down 300ms ease-out forwards;
  ${({ width }) =>
    width &&
    css`
      left: 50%;
      width: ${width};
      transform: translateX(-50%);
    `}
`;
