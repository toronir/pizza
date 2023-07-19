import styled from 'styled-components';
import LogoGF from '../../assets/img/logo_gf.svg';

const LogoStyled = styled.img`
  margin-top: 0.5rem;
  max-width: 150px;
`;

const Logo = () => {
  return <LogoStyled src={LogoGF} alt="Good Food logo" />;
};

export default Logo;
