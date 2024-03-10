import { Container } from "./styles"

export function Modal({ isOpen, children }) {
  if (isOpen) {
    return (
      <Container>
        <div>{children}</div>
      </Container>
    )
  }
  return null
}
