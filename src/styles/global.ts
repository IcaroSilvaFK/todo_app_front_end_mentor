import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  body,#root {
    background: ${({ theme }) => theme.colors.neutrals.primary};
    width: 100%;
    height: 100%;

    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      background:transparent;
      width: 10px
    }
    &::-webkit-scrollbar-thumb {
      background:${({ theme }) => theme.colors.neutrals.semi};
      border-radius: 20px;
    }
  } 

  body,button,input,textarea{
    font-family: ${({ theme }) => theme.fonts.josefin};
    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }

  input,button{
    outline: 0;
    border:0
  }

  img,picture {
    max-width: 100%;
    display: block;
    line-height: 0;
  }

  ul,ol{
    list-style: none;
  }

`;
