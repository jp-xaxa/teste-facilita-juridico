import { useState } from "react"
import { api } from "../../services/api"

import { FiArrowLeft, FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Header, Form } from "./styles"

export function NewClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [coordinateX, setCoordinateX] = useState("")
  const [coordinateY, setCoordinateY] = useState("")

  const navigate = useNavigate()

  function handleClickAddClient() {
    if (!name || !email || !telephone || !coordinateX || !coordinateY) {
      return alert("Preencha todos os campos!")
    }

    if (
      !Number.isInteger(parseFloat(coordinateX)) ||
      !Number.isInteger(parseFloat(coordinateY))
    ) {
      return alert("As coordenadas devem ser números inteiros.")
    }

    api
      .post("/client", { name, email, telephone, coordinateX, coordinateY })
      .then(() => {
        alert("Cliente cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar cliente.")
        }
      })
  }

  return (
    <Container>
      <Header>
        <h1>Novo Cliente</h1>

        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </Header>

      <Form>
        <h3>Preencha os campos.</h3>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Telefone"
          type="text"
          icon={FiPhone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <div>
          <Input
            placeholder="Coordenada X"
            type="number"
            icon={FiMapPin}
            onChange={(e) => setCoordinateX(e.target.value)}
          />

          <Input
            placeholder="Coordenada Y"
            type="number"
            icon={FiMapPin}
            onChange={(e) => setCoordinateY(e.target.value)}
          />
        </div>

        <Button title="Salvar" onClick={handleClickAddClient} />
      </Form>
    </Container>
  )
}
