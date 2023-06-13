import { useEffect, useState } from 'react';
import { getAll } from '../../../shared/utils/api/concursos.js';
import Spinner from '../../../shared/utils/components/Spinner.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Concursos({ handleDelete = null, handleEdit = null, updateFlag }) {
  const [concursos, setConcursos] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await getAll();
        console.log(data);
        setConcursos(data);
      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
      setLoading(false)
    };

    fetchData();
  }, [updateFlag]);

  return (
    <div className='concursos'>
      {loading? <center><Spinner /></center>:null}
      {concursos?.map((el) => (
        <div key={el.Id}>
          <Link className='card-concurso' to={`categorias/${el.Id}`}>
            <h2>{el.Nombre}</h2>

            <img src={`/icons/${el.Img}-icon.png`} alt="" />

            <div>
              <p>{el.Descripcion}</p>
              <p>{el.Tipo}</p>
              {el.Estado === 'no-iniciado' ? (
                <b className='red'>No iniciado</b>
              ) : el.Estado === 'iniciado' ? (
                <b className='green'>Iniciado</b>
              ) : (
                <b className='red'>Finalizado</b>
              )}
            </div>
          </Link>
          {handleDelete !== null && handleEdit !== null ? (
            <div className='btn-container'>
              <button className='btn-delete' onClick={() => handleDelete(el.Id)}>
                Eliminar
              </button>
              <button className='btn-edit' onClick={() => handleEdit(el)}>
                Editar
              </button>
              <br />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

Concursos.propTypes = {
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  updateFlag: PropTypes.bool
};

export default Concursos;
