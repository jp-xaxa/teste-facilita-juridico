import styled from "styled-components"

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.BACKGROUND_300 : theme.COLORS.BACKGROUND_100};

  border: none;
  font-size: 1.8rem;
`
