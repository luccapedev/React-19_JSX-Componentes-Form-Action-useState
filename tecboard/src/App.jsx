import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// no react, componentes são FUNÇÕES

function TituloFormulario ( props ) {
  return (
    <h2>{props.children}</h2>
  )
}

function CampoDeFormulario ( props ) {
  return (
    <fieldset>
      {props.children}
    </fieldset>
  )
}

function Label( props ) {
  return (
    <label htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}

function CampoDeEntrada ( props ) {
  return (
      <input {...props}/>
  )
}

function FormularioDeEvento () {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada
          type="text" 
          id="nome" 
          placeholder='Summer dev hits'
          name='nomeEvento'/>
      </CampoDeFormulario>
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
