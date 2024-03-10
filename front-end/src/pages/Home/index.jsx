import { useEffect, useState } from "react"
import { api } from "../../services/api"

import { IoSearch } from "react-icons/io5"
import { FiPlus } from "react-icons/fi"

import { Menu } from "../../components/Menu"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Modal } from "../../components/Modal"

import {
  Container,
  Brand,
  Header,
  Search,
  Content,
  NewClient,
  Table,
} from "./styles"
import { NoteClient } from "../../components/NoteClient"

export function Home() {
  const [search, setSearch] = useState("")
  const [clients, setClients] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [service, setService] = useState([])

  useEffect(() => {
    async function fetchClients() {
      const response = await api.get(`/client?name=${search}`)
      setClients(response.data)
    }
    fetchClients()
  }, [search])

  useEffect(() => {
    async function fetchService() {
      const response = await api.get("/service")
      setService(response.data.route)
      console.log(response.data.route)
    }

    fetchService()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>CleanHouse</h1>
      </Brand>

      <Header>
        <h1>Home</h1>

        <Button title="Rota de serviço" onClick={() => setOpenModal(true)} />
      </Header>

      <Menu />

      <Modal isOpen={openModal}>
        <div>
          <Table>
            <thead>
              <tr>
                <th>Nº</th>

                <th>Nome</th>

                <th>E-mail</th>

                <th>Telephone</th>

                <th>Coordenada X</th>

                <th>Coordenada Y</th>
              </tr>
            </thead>

            <tbody>
              {service.map((client, index) => (
                <tr key={index}>
                  <td>{index + 1}º</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.telephone}</td>
                  <td>{client.coordinateX}</td>
                  <td>{client.coordinateY}</td>
                </tr>
              ))}

              {/*<tr>
                <td>1 º</td>
                <td>João</td>
                <td>joao@gmail.com</td>
                <td>31984028894</td>
                <td>5</td>
                <td>5</td>
                </tr>*/}
            </tbody>
          </Table>
        </div>
        <Button title="Fehcar" onClick={() => setOpenModal(false)} />
      </Modal>

      <Search>
        <Input
          placeholder="Pesquisar por nome"
          icon={IoSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        {clients.map((client) => (
          <NoteClient key={String(client.id)} data={client} />
        ))}
      </Content>

      <NewClient to="/new-client">
        <FiPlus />
        Cadastrar novo Cliente
      </NewClient>
    </Container>
  )
}
