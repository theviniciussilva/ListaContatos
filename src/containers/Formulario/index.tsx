import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header, Titulo } from '../../styles'
import { BotaoCadastro, FormContainer, Inputs } from './styles'
import Usuario from '../../models/Usuario'
import { cadastrar } from '../../store/reducers/dados'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <>
      <Header>
        <Titulo>Lista de Cadastro</Titulo>
      </Header>
      <FormContainer onSubmit={cadastrarTarefa}>
        <label htmlFor="nome">Nome: </label>
        <Inputs
          onChange={(evento) => setNome(evento.target.value)}
          value={nome}
          name="nome"
          type="text"
          placeholder="Digite seu nome"
        />
        <label htmlFor="email">Email: </label>
        <Inputs
          onChange={(evento) => setEmail(evento.target.value)}
          value={email}
          name="email"
          type="text"
          placeholder="Digite seu Email"
        />
        <label htmlFor="telefone">Telefone: </label>
        <Inputs
          onChange={(evento) => setTelefone(evento.target.value)}
          value={telefone}
          name="telefone"
          type="text"
          placeholder="Digite seu Telefone"
        />
        <BotaoCadastro>Cadastrar</BotaoCadastro>
      </FormContainer>
    </>
  )
}

export default Formulario
