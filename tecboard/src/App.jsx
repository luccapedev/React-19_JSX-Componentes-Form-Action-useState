import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// no react, componentes são FUNÇÕES

function TituloFormulario (props) {
  return (
    <h2>{props.children}</h2>
  )
}

function FormularioDeEvento () {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario>
      <fieldset>
        <label htmlFor="">
          Qual o nome do evento?
        </label>
        <input type="text" id="nome" placeholder='Summer dev hits'/>
      </fieldset>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo"/>
      </header>
      <section>
        <img src="/banner.png" alt="banner"/>
      </section>
      <FormularioDeEvento/>
    </main>
  )
}

export default App
