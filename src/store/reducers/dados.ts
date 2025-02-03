import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Usuario from '../../models/Usuario'

type TarefasState = {
  itens: Usuario[]
}

const initialState: TarefasState = {
  itens: []
}

const usuarioSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((dado) => dado.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Usuario>) => {
      const indexDoUsuario = state.itens.findIndex(
        (u) => u.id === action.payload.id
      )
      if (indexDoUsuario >= 0) {
        state.itens[indexDoUsuario] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Usuario, 'id'>>) => {
      const nomeExiste = state.itens.find(
        (usuario) =>
          usuario.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      const emailExiste = state.itens.find(
        (usuario) =>
          usuario.email.toLowerCase() === action.payload.email.toLowerCase()
      )
      const telefoneExiste = state.itens.find(
        (usuario) =>
          usuario.telefone.toLowerCase() ===
          action.payload.telefone.toLowerCase()
      )
      if (nomeExiste || emailExiste || telefoneExiste) {
        alert('Já existe um usuário com esses dados')
      } else {
        const ultimoUsuario = state.itens[state.itens.length - 1]

        const usuarioNovo = {
          ...action.payload,
          id: ultimoUsuario ? ultimoUsuario.id + 1 : 1
        }
        state.itens.push(usuarioNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = usuarioSlice.actions
export default usuarioSlice.reducer
