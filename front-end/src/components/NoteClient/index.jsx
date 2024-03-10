import { FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { TbCircleLetterX, TbCircleLetterY } from "react-icons/tb"

import { Container } from "./styles"

export function NoteClient({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <FiUser /> <p>{data.name}</p>
      </div>
      <div>
        <FiMail />
        <p>{data.email}</p>
      </div>
      <div>
        <FiPhone />
        <p>{data.telephone}</p>
      </div>
      <div>
        <TbCircleLetterX />
        <p>{data.coordinateX}</p>
      </div>
      <div>
        <TbCircleLetterY />
        <p>{data.coordinateY}</p>
      </div>
    </Container>
  )
}
