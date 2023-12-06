import { useState } from 'react'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function FormCodigo({ handleSubmit }) {
  const MySwal = withReactContent(Swal)
  const [codigo, setCodigo] = useState("")

  const handleChange = (event) => {
    const codigo = event.target.value.toUpperCase();
    setCodigo(codigo);
  }

  const handleClick = () => {
    if (codigo !== "") {
      handleSubmit(codigo);
    } else {
      MySwal.fire({
        icon: 'error',
        title: "Código inválido"
      });
    }
  }

  return (
    <div>
      <h3>Puedes votar también escribiendo el código del participante!!</h3>
      <br />
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
          onChange={handleChange}
        />
        <label htmlFor="codigo">Código de participante</label>
      </div>

      <button className='submit-code' onClick={handleClick}>Buscar</button>
    </div>
  )
}

FormCodigo.propTypes = {
  handleSubmit: PropTypes.func
};

export default FormCodigo;
