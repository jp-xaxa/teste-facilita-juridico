import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10rem 13rem auto 6.4rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newclient content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`

export const Brand = styled.div`
  grid-area: "brand";

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }
`

export const Header = styled.div`
  grid-area: header;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > button {
    width: 15rem;
    margin: 0;
  }
`

export const Search = styled.div`
  grid-area: search;
  padding: 3rem 6.4rem 0;
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
`

export const NewClient = styled(Link)`
  grid-area: newclient;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.8rem;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  box-shadow: 0 1rem 2rem -1rem ${({ theme }) => theme.COLORS.BACKGROUND_900};

  margin-top: 2rem;

  > thead {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > tr th {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
      padding: 0.5rem 1rem;
      white-space: nowrap;
    }

    > tr th:first-child {
      border-top-left-radius: 1rem;
    }

    > tr th:last-child {
      border-top-right-radius: 1rem;
    }
  }

  > tbody {
    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > tr td {
      padding: 0.5rem 1rem;
    }

    > tr:nth-child(odd) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    }

    > tr:nth-child(even) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    }
  }
`
