import styled from 'styled-components';

interface IHeaderProps {
  isDarkTheme: boolean;
}

export const Container = styled.div``;

export const ContainerHeader = styled.header<IHeaderProps>`
  background-image: ${({ isDarkTheme }) =>
    isDarkTheme
      ? "url('/assets/bg-desktop-dark.jpg')"
      : "url('/assets/bg-desktop-light.jpg')"};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 88px;
  height: 350px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  flex: 1;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-size: 2.1rem;
  }

  button {
    background: transparent;
  }

  @media screen and (max-width: 800px) {
    max-width: 80%;
  }
`;

export const Body = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    max-width: 80%;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: -180px;

  > div {
    width: 100%;
    background: ${({ theme }) => theme.colors.neutrals.secundary};

    padding: 0 12px;

    border-radius: 4px;

    display: flex;
    align-items: center;

    > div {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        width: 25px;
        height: 23px;
        content: '';
        background: linear-gradient(
          ${({ theme }) => theme.colors.background.linearGradient}
        );
        border-radius: 50%;
        display: block;
      }

      div {
        width: 93%;
        height: 95%;
        background: ${({ theme }) => theme.colors.neutrals.secundary};
        position: absolute;
        border-radius: 50%;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
      }
    }

    input {
      background: transparent;
      width: 100%;
      padding: 12px 22px;
      height: 50px;
      font-size: 1.2rem;

      color: ${({ theme }) => theme.colors.neutrals.terdiary};
    }
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.secundary};
  margin-top: 38px;
  border-radius: 4px;

  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
`;

export const NavigationMobile = styled.nav`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;

    background: ${({ theme }) => theme.colors.neutrals.secundary};
    margin-top: 34px;
    border-radius: 4px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);

    padding: 12px 0;

    ul {
      display: flex;
      justify-content: center;
      gap: 12px;

      li {
        button {
          color: ${({ theme }) => theme.colors.neutrals.semi};
          background: transparent;
        }
        &.active {
          button {
            color: ${({ theme }) => theme.colors.brightBlue};
          }
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 38px;

  color: ${({ theme }) => theme.colors.neutrals.thin};
`;
