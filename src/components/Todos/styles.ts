import styled, { css } from 'styled-components';

type IListItemProps = {
  isActive: boolean;
};

export const Container = styled.ul``;

export const ListItem = styled.div<IListItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 22px;

  padding: 14px 12px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.light};

  button:first-of-type {
    border: 0.2px solid ${({ theme }) => theme.colors.neutrals.semi};

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
  }

  button:last-child {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    span {
      color: ${({ theme }) => theme.colors.neutrals.terdiary};

      ${({ theme, isActive }) =>
        isActive &&
        css`
          text-decoration: line-through;
          color: ${theme.colors.neutrals.light};
        `}
    }

    img {
      visibility: hidden;
      transition: all linear 0.2s;
    }
    &:hover {
      img {
        visibility: visible;
      }
    }
  }
  ${({ theme, isActive }) =>
    isActive &&
    css`
      span {
        text-decoration: line-through;
        color: ${theme.colors.neutrals.secundary};
      }

      button:first-of-type {
        background: linear-gradient(
          to right,
          ${theme.colors.background.linearGradient}
        );

        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.text};
      }
    `}
`;
