import styled from 'styled-components'
import { Botao } from '../../styles'

export const Inputs = styled.input`
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  margin-left: 12px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
  max-width: 95%;
  label {
    margin-left: 12px;
  }
`

export const BotaoCadastro = styled(Botao)`
  background-color: green;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 0px;
`
