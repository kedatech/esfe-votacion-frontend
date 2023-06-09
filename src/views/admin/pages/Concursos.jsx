import { Navigate, Route, Routes } from 'react-router-dom';
import Concursos from '../../public/pages/Concursos';
import { deleteItem, createItem, editItem } from '../../../shared/utils/api/concursos';
import { useState } from 'react';

function FromConcurso() {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [formData, setFormData] = useState({
    Id: '',
    Nombre: '',
    Descripcion: '',
    Tipo: 'puntaje',
    Activo: 1
  });

  const handleDelete = async (Id) => {
    const resul = await deleteItem(Id);
    if (!resul.error) {
      setUpdateFlag(!updateFlag);
    }
    console.log(resul);
  };

  const handleEdit = (concurso) => {
    setFormData({
      Id: concurso.Id,
      Nombre: concurso.Nombre,
      Descripcion: concurso.Descripcion,
      Tipo: concurso.Tipo,
      Activo: concurso.Activo
    });
    console.log("edit");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.Id) {
      // Llama al método de la API para editar el concurso usando formData
      const result = await editItem(formData);
      console.log(result);
      console.log("Concurso editado");
    } else {
      // Llama al método de la API para crear el concurso usando formData
      const result = await createItem(formData);
      console.log(result);
      console.log("Concurso creado");
    }
    setFormData({
      Id: '',
      Nombre: '',
      Descripcion: '',
      Tipo: 'puntaje',
      Activo: 1
    });
    setUpdateFlag(!updateFlag)
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'Activo' ? (value === 'activo' ? 1 : 0) : value
    }));
  };

  return (
    <div className='admin-concursos'>
      <h1 className='admin-title'>Administrar concursos</h1>
      <form className='from-concurso' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nombre'
          name="Nombre"
          value={formData.Nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder='Descripcion'
          name="Descripcion"
          value={formData.Descripcion}
          onChange={handleInputChange}
        />

        <label htmlFor="tipo">Selecciona Tipo:</label>

        <select id="tipo-options" name="Tipo" value={formData.Tipo} onChange={handleInputChange}>
          <option value="puntaje">Putaje</option>
          <option value="votacion">Votación</option>
        </select>

        <label>
          <input
            type="radio"
            name="Activo"
            value="activo"
            checked={formData.Activo === 1}
            onChange={handleInputChange}
          />
          Activo
        </label>

        <label>
          <input
            type="radio"
            name="Activo"
            value="finalizado"
            checked={formData.Activo === 0}
            onChange={handleInputChange}
          />
          Finalizado
        </label>

        <button type="submit">{formData.Id ? 'Editar' : 'Crear'}</button>
      </form>
      <Routes>
        <Route index element={<Navigate to={"concursos"} />} />
        <Route
          path='concursos'
          element={<Concursos
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          updateFlag={updateFlag}
          />}
        />
        </Routes>
      </div>
);
}

export default FromConcurso;