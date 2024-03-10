import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 1rem;
  padding: 1rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > svg {
      margin-right: 1rem;
    }
  }
`
