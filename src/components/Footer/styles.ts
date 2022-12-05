import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 18px;

  span {
    color: ${({ theme }) => theme.colors.neutrals.semi};
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 22px;

      li.active {
        button {
          color: ${({ theme }) => theme.colors.brightBlue};
        }
      }

      button {
        background: transparent;
        color: ${({ theme }) => theme.colors.neutrals.semi};

        transition: all linear 0.3s;

        &:hover {
          color: ${({ theme }) => theme.colors.neutrals.terdiary};
        }
      }
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.neutrals.semi};

    transition: all linear 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.neutrals.terdiary};
    }
  }
`;
