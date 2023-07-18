import styled from 'styled-components';
import FooterListItem from './FooterListItem';

const FooterStyled = styled.footer`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.dirtyGray};
`;

const Footer = () => {
  return (
    <FooterStyled>
      <FooterListItem />
    </FooterStyled>
  );
};

export default Footer;
