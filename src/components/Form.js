import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
      // this.props é uma forma de passarmos o valor do state do pai para um filho
    return (
      <form className="divForm">

        <section className="sectionTable">
          Nome
          <label htmlFor="cardName" className="teste-label">
            <input
              name="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              placeholder="Digite aqui"
            />
          </label>
        </section>

        <section className="sectionTable">
          Descrição
          <label htmlFor="cardDescription">
            <input
              name="cardDescription"
              data-testid="description-input"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
              placeholder="Digite aqui"
            />
          </label>
        </section>

        <section className="sectionTable">
          Ataque
          <label htmlFor="cardAttr1">
            <input
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section className="sectionTable">
          Defesa
          <label htmlFor="cardAttr2">
            <input
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section className="sectionTable">
          Habilidade Especial
          <label htmlFor="cardAttr3">
            <input
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section className="sectionTable">
          Imagem
          <label htmlFor="cardImage">
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              placeholder="Insira o link aqui"
            />
          </label>
        </section>

        <label className="sectionTable" htmlFor="cardRare">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value=""> </option>
            <option value="Normal">Normal</option>
            <option value="Incomum">Incomum</option>
            <option value="Raro">Raro</option>
          </select>
        </label>

        {
          (hasTrunfo === true)
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <section className="sectionTable">
                <label htmlFor="cardTrunfo">
                  Super-Trunfo
                  <input
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    type="checkbox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              </section>)
        }

        <section>
          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </section>

      </form>
    );
  }
}
// verifica os tipos das props passadas para um componente durante o desenvolvimento e levanta um warning se algo não estiver como planejado
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
