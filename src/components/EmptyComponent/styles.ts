import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 22px;
  color: ${({ theme }) => theme.colors.text};

  gap: 0.5rem;
`;
