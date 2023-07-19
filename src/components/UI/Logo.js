import styled from 'styled-components';
import LogoGF from '../../assets/img/logo_gf.svg';

const LogoStyled = styled.img`
  display: none;
  margin-top: 0.5rem;
  max-width: 150px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Logo = () => {
  return <LogoStyled src={LogoGF} alt="Good Food logo" />;
};

export default Logo;
