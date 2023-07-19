import styled from 'styled-components';
import LogoGFMobile from '../../assets/img/logo_gf_sq.svg';

const LogoMobileStyled = styled.img`
  max-width: 80px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoMobile = () => {
  return <LogoMobileStyled src={LogoGFMobile} alt="Good Food logo" />;
};

export default LogoMobile;
