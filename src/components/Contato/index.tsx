import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/dados'
import Usuario from '../../models/Usuario'
import { Botao } from '../../styles'

type Props = Usuario

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()
  const dados = nomeOriginal + emailOriginal + telefoneOriginal

  useEffect(() => {
    if (dados.length > 0) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal])

  const click = () => {
    setIsReadOnly(!estaEditando)
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      {estaEditando && <em>Editando</em>}
      <label>
        Nome:{' '}
        <input
          readOnly={isReadOnly}
          onClick={click}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          value={nome}
        />
      </label>
      <label>
        Email:{' '}
        <input
          onClick={click}
          readOnly={isReadOnly}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          value={email}
        ></input>
      </label>
      <label>
        Telefone:{' '}
        <input
          onClick={click}
          onChange={(evento) => setTelefone(evento.target.value)}
          readOnly={isReadOnly}
          value={telefone}
          maxLength={11}
          type="text"
        />
      </label>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <Botao
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </Botao>
            <S.BotaoCancelarRemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Contato
