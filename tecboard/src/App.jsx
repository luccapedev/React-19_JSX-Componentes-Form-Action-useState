import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// no react, componentes são FUNÇÕES

function FormularioDeEvento () {
  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="">
          Qual o nome do evento?
        </label>
        <input type="text" id="nome"/>
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
