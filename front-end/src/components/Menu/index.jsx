import { Link } from "react-router-dom"

import { Container } from "./styles"

export function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </Container>
  )
}
