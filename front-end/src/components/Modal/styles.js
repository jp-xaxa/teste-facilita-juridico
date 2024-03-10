import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300} opacity 0.3;

  > div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    border-radius: 1.5rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    text-align: center;

    > button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
      border-radius: 0.5rem;
      width: 15rem;
    }
  }
`
