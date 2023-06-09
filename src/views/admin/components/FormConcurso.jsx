function FormConcurso() {
  return (
    <form className='from-concurso' action="">
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Descripcion' />

        <label htmlFor="tipo">Selecciona Tipo:</label>

        <select id="tipo-options">
          <option value="puntaje">Putaje</option>
          <option value="votacion">Votación</option>
        </select>

        <label>
          <input type="radio" name="status" value="activo" checked />
          Activo
        </label>

        <label>
          <input type="radio" name="status" value="finalizado" />
          Finalizado
        </label>

          <button>Crear</button>
    </form>
  )
}
export default FormConcurso