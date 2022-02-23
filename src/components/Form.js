import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name>">
          Nome
          <input
            data-testid="name-input"
            type="text"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
          />
        </label>

        <label htmlFor="Atack">
          Ataque
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <label htmlFor="Defense">
          Defesa
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <label htmlFor="Special Hability">
          Habilidade Especial
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>

        <label htmlFor="Image">
          <input
            data-testid="image-input"
            type="text"
          />
        </label>

        <label htmlFor="Rarity">
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="Super Trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>

        <button data-testid="save-button" type="submit">Salvar</button>

      </form>
    );
  }
}

export default Form;
