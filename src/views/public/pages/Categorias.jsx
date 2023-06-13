import { useEffect, useState } from 'react';
import { getById } from '../../../shared/utils/api/concursos';
import Spinner from '../../../shared/utils/components/Spinner';
import { useParams } from 'react-router-dom'
import Acordion from '../components/Acordion'

function Categoria() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false)

  const {id} = useParams()
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const data = await getById(id);
        console.log(data)
        setCategorias(data);
      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
      setLoading(false)
    };

    fetchData();
  }, []);

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (itemId) => {
    setExpandedItem(itemId === expandedItem ? null : itemId);
  };

  return (
    <div className='container'>
      <div className='accordion'>
        {
          loading 
          ? (
            <center> <Spinner /></center>
          )
          : (
            categorias.length === 0 
            ? <h1>No hay categorias</h1>
            : categorias.map( el => (
              <Acordion item={el} expandedItem={expandedItem} toggleAccordion={toggleAccordion} key={el.Id}/>
              ))
          )
        }
        
      </div>
       
    </div>
  );
}

export default Categoria;
