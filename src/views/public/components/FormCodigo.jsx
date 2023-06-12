import { useState } from 'react'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function FormCodigo({handleSubmit}) {
  const MySwal = withReactContent(Swal)
  const [codigo, setCodigo] = useState("")
  

  const click = () =>{
    const regex = /^[a-zA-Z]{2}(20|21|22|23)\d{3}$/;

    if (regex.test(codigo)) {
      handleSubmit(codigo)
    } else {
      MySwal.fire({
        icon: 'error',
        title: "Codigo invalido"
      })
    }
  }
  return (
    <div>
      <h3>Puedes votar también escribiendo el codigo del participante!!</h3>
      <div className='form-input-material'>
        <input
            type="text"
            name="codigo"
            id="codigo"
            placeholder=" "
            autoComplete="off"
            className="form-control-material"
            required
            value={codigo}
            onChange={(e)=> setCodigo(e.target.value)}
          />
        <label htmlFor="codigo">Codigo de participante</label>
      </div>

      <button onClick={()=> click()}>Votar</button>
    </div>
  )
}

FormCodigo.propTypes = {
  handleSubmit: PropTypes.func
};

export default FormCodigo