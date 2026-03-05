import './campo-formulario.estilos.css'

export function CampoDeFormulario ( props ) {
  return (
    <fieldset className='campo-form'>
      {props.children}
    </fieldset>
  )
}