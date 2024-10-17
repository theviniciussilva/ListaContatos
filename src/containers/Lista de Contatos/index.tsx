import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  // acessando meu reducer usuario/ preciso usar RootReducer para ele me retornar meus objetos
  const { itens } = useSelector((state: RootReducer) => state.usuarios)
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const filtraUsuarios = () => {
    if (!termo) {
      return itens // Se não há termo, retorna todos os itens
    }
    const termoLower = termo.toLowerCase() // Prepara o termo para comparação
    const usuariosFiltrados = itens.filter((dados) => {
      return (
        dados.nome.toLowerCase().includes(termoLower) ||
        dados.email.toLowerCase().includes(termoLower) ||
        dados.telefone.toLowerCase().includes(termoLower)
      )
    })

    return usuariosFiltrados // Retorna os usuários filtrados
  }

  return (
    <>
      <MainContainer>
        <ul>
          {filtraUsuarios().map((d) => (
            <li key={d.nome}>
              <Contato
                id={d.id}
                nome={d.nome}
                email={d.email}
                telefone={d.telefone}
              />
            </li>
          ))}
        </ul>
      </MainContainer>
    </>
  )
}

export default ListaContatos
