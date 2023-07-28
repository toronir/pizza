import styled from 'styled-components';

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 0 0.5rem;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.lightGreen};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.color.lightGreen};
`;
