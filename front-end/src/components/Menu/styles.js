import styled from "styled-components"

export const Container = styled.nav`
  grid-area: menu;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  padding-top: 3rem;

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;

    > li {
      list-style: none;
      text-decoration: none;
      text-align: center;

      > a {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        font-size: 1.8rem;
      }
    }
  }
`
