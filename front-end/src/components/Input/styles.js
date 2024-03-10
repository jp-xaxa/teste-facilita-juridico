import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-height: 5.6rem;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  border-radius: 1rem;

  > input {
    width: 100%;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    background: transparent;
    border: 0;

    &::placeholder {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`
