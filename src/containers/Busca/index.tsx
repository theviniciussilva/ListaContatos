import { useDispatch, useSelector } from 'react-redux'
import { Campo } from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Header, Titulo } from '../../styles'

const Busca = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <Header>
        <Titulo>Lista de Contatos</Titulo>
      </Header>
      <Campo
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        type="text"
        placeholder="Procure por nome, email ou telefone"
      />
    </>
  )
}

export default Busca
