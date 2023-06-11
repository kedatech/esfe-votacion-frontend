import { useState } from 'react';
import { authEstudiante } from '../../../shared/utils/api/auth';

function Form() {
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
    const result = await authEstudiante(formData);
    if(!result.error){

      localStorage.setItem("authEstudianteResult",JSON.stringify(result))
      localStorage.setItem("codigoEstudiante",JSON.stringify(formData.Codigo))
      window.location.assign("/home")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Codigo"
        placeholder="Codigo de Estudiante"
        value={formData.Codigo}
        onChange={handleChange}
      />

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

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
