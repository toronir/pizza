import styled from 'styled-components';
import { Splide } from '@splidejs/react-splide';

const SliderStyled = styled(Splide)`
  padding-bottom: 3rem;
  & .splide__pagination button {
    width: 1.2rem;
    height: 1.2rem;
  }
  & .splide__pagination button.is-active {
    background-color: ${({ theme }) => theme.color.intenseGreen};
  }
`;

export default SliderStyled;
