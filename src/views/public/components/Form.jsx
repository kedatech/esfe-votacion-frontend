import { useState } from 'react';
import { authEstudiante } from '../../../shared/utils/api/auth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Form() {
  const MySwal = withReactContent(Swal)
  const [formData, setFormData] = useState({
    Codigo: '',
    IdCarrera: '',
    IdAnio: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(formData.IdAnio === '' || formData.IdCarrera === ''){
      MySwal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Todos los campos son necesarios!'
      })
      return
    }
    const result = await authEstudiante(formData);
    if(!result.error){

      localStorage.setItem("authEstudianteResult",JSON.stringify(result))
      localStorage.setItem("codigoEstudiante",JSON.stringify(formData.Codigo))
      window.location.assign("/home")
    }
  };

  return (
    <form className='user-form' onSubmit={handleSubmit}>
      <h1>¿Eres estudiante?</h1>
      <input
        type="text"
        name="Codigo"
        placeholder="Codigo de Estudiante"
        value={formData.Codigo}
        onChange={handleChange}
      />

      <div className='selection'>
        <label htmlFor="IdCarrera">Selecciona Carrera:</label>
        <select
          id="IdCarrera"
          name="IdCarrera"
          value={formData.IdCarrera}
          onChange={handleChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="1">TIDS</option>
          <option value="2">TIE</option>
          <option value="3">TM</option>
        </select>
      </div>

      <div className="selection">
        <label htmlFor="IdAnios">Selecciona Año:</label>
        <select
          id="IdAnios"
          name="IdAnio"
          value={formData.IdAnio}
          onChange={handleChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="1">1° año</option>
          <option value="2">2° año</option>
          <option value="3">4° año</option>
        </select>
      </div>



      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
