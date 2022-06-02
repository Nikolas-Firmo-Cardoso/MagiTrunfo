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
      <form>
        <div className="divForm">
          <section className="sectionTable">
            <label htmlFor="cardName">
              Nome
              <section>
                <input
                  name="cardName"
                  data-testid="name-input"
                  type="text"
                  value={ cardName }
                  onChange={ onInputChange }
                />
              </section>
            </label>
          </section>

          <section className="sectionTable">
            <label htmlFor="cardDescription">
              Descrição
              <section>
                <input
                  name="cardDescription"
                  data-testid="description-input"
                  type="textarea"
                  value={ cardDescription }
                  onChange={ onInputChange }
                />
              </section>
            </label>
          </section>

          <section className="sectionTable">
            <label htmlFor="cardAttr1">
              Ataque
              <section>
                <input
                  name="cardAttr1"
                  data-testid="attr1-input"
                  type="number"
                  value={ cardAttr1 }
                  onChange={ onInputChange }
                />
              </section>
            </label>
          </section>

          <section className="sectionTable">
            <label htmlFor="cardAttr2">
              Defesa
              <section>
                <input
                  name="cardAttr2"
                  data-testid="attr2-input"
                  type="number"
                  value={ cardAttr2 }
                  onChange={ onInputChange }
                />
              </section>
            </label>
          </section>

          <section className="sectionTable">
            <label htmlFor="cardAttr3">
              Habilidade Especial
              <section>
                <input
                  name="cardAttr3"
                  data-testid="attr3-input"
                  type="number"
                  value={ cardAttr3 }
                  onChange={ onInputChange }
                />
              </section>
            </label>
          </section>

          <section className="sectionTable">
            <label htmlFor="cardImage">
              Imagem
              <section>
                <input
                  name="cardImage"
                  data-testid="image-input"
                  type="text"
                  value={ cardImage }
                  onChange={ onInputChange }
                />
              </section>
            </label>
          </section>

          <section className="sectionTable">
            <label htmlFor="cardRare">
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
          </section>

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
        </div>

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
