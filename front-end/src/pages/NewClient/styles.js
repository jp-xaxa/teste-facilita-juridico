import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10rem auto;
  grid-template-areas:
    "header"
    "form";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`

export const Header = styled.div`
  grid-area: "header";
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }

  > a {
    text-decoration: none;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }
`

export const Form = styled.form`
  grid-area: "form";
  width: 50rem;
  margin: 2rem auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;

  > h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    gap: 1.8rem;
  }
`
