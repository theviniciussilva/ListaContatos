import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './reducers/dados'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    usuarios: usuarioReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
