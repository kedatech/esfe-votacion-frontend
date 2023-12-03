  import { useState } from 'react';
  import { authEstudiante } from '../../../shared/utils/api/auth';
  import useEvent from '../../../shared/helpers/useEvent'
  import Swal from 'sweetalert2'
  import withReactContent from 'sweetalert2-react-content'
  import Loading from '../../../shared/utils/components/Loading'


  export function LoginJuez({setValidate}) {
    const MySwal = withReactContent(Swal)
    const [error, setError] = useEvent("")
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      Codigo: '',
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      
      // Verificar si el campo de entrada es "Codigo"
      if (name === 'Codigo') {
        // Convertir el valor a mayúsculas
        const codigo = value.toLowerCase();
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: codigo
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      }
    };
    

    const handleSubmit = async (event) => {
      event.preventDefault();
      // FormData.Codigo = FormData.Codigo.toUpperCase()
      let { Codigo } = formData

      if (Codigo === "") {
        
        setError(`${Codigo} no es un codigo valido`)
        return;
      }
     
      setLoading(true)
      const result = await authEstudiante(formData);
      if(!result.error){

        localStorage.setItem("authJuezToken",JSON.stringify(result))
        localStorage.setItem("codigoJuez",JSON.stringify(formData.Codigo))
        setValidate(true)
      }else{
        setError("Cuenta no encontrada")
      }
      setLoading(false)
    };
    if(error !== ""){
      MySwal.fire({
        icon: 'error',
        title: error
      })
    }

    return (
      <div className="container-user-form">
        {
          loading
          ?<Loading />
          :<form className='user-form' onSubmit={handleSubmit}>
          <h1>¿Código de invitación?</h1>
          <input
            type="text"
            name="Codigo"
            placeholder="Codigo de invitación"
            value={formData.Codigo}
            onChange={handleChange}
          />



          <button type="submit">Enviar</button>
        </form>
          
        }
        
      </div>
    );
  }