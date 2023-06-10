import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    codigoEstudiante: '',
    carrera: '',
    anio: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("algo")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="codigoEstudiante"
        placeholder="Codigo de Estudiante"
        value={formData.codigoEstudiante}
        onChange={handleChange}
      />

      <label htmlFor="carreraw">Selecciona Carrera:</label>
      <select
        id="carreraw"
        name="carrera"
        value={formData.carrera}
        onChange={handleChange}
      >
        <option value="">Selecciona una opción</option>
        <option value="TIDS">TIDS</option>
        <option value="TIE">TIE</option>
        <option value="TM">TM</option>
      </select>

      <label htmlFor="anios">Selecciona Año:</label>
      <select
        id="anios"
        name="anio"
        value={formData.anio}
        onChange={handleChange}
      >
        <option value="">Selecciona una opción</option>
        <option value="1° año">1° año</option>
        <option value="2° año">2° año</option>
        <option value="3° año">3° año</option>
        <option value="4° año">4° año</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
