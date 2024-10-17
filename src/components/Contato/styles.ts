import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  font-weight: bold;

  label {
    display: flex;
    align-items: center;
    margin-top: 4px;
    margin-bottom: 8px;

    input {
      outline: none;
      border: none;
      margin-left: 14px;
      font-size: 16px;
      width: 100%;
      -moz-appearance: textfield;
    }
  }
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
