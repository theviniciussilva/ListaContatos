import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-row: 280px 1fr;
  max-width: 768px;
  margin: 80px auto;
  background-color: #bdc3c7;
  border-radius: 10px;
  grid-gap: 20px;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 50vh;
  overflow-y: scroll;
`
export const Header = styled.header`
  background-color: #2c3e50;
  padding: 30px;
  display: flex;
  justify-content: center;
  border-radius: 12px;
`

export const Titulo = styled.h1`
  color: #fff;
  font-size: 24px;
  line-weight: 24px;
  font-weight: bold;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export default EstiloGlobal
