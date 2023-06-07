import PropTypes from 'prop-types';

const Accordion = ({item, expandedItem, toggleAccordion}) => {


  return (
    
    <div className="accordion-item">
      <button
        id={item.Id}
        aria-expanded={expandedItem === item.Id}
        onClick={() => toggleAccordion(item.Id)}
      >
        <span className="accordion-title">{item.Nombre}</span>
        <span className="icon" aria-hidden="true"></span>
      </button>
      {expandedItem === item.Id && (
        <div className="accordion-content">
          {item.Participantes.map(el=>(
            <div key={el.Id}>
              <b>{el.Nombre}</b>
              <p> {el.Puntaje
                ? `Puntaje: ${el.Puntaje}`
                : `Votos: ${el.ConteoVotos}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    
  );
};

Accordion.propTypes = {
  item: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Nombre: PropTypes.string.isRequired,
    Participantes: PropTypes.array.isRequired
  }).isRequired,
  expandedItem: PropTypes.number,
  toggleAccordion: PropTypes.func.isRequired,
};

export default Accordion;
