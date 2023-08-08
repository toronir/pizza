import styled from 'styled-components';

const SlideStyled = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  padding: 2rem;
  min-height: 500px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  & a,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & a {
    z-index: 3;
  }
  & img {
    z-index: -1;
    object-fit: cover;
    object-position: center;
  }
  & > div {
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 2rem;
    z-index: 2;
  }
  & h4 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
    margin: 0;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 1rem 0;
  }
`;

export default SlideStyled;
