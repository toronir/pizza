import styled from 'styled-components';

const LogoMobileStyled = styled.img`
  max-width: 80px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default LogoMobileStyled;
