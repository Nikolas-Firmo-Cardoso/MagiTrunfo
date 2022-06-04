import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="card card-teste">
        <div className="cardAttributes">
          <p data-testid="name-card">{ cardName }</p>
        </div>
        <img
          className="imagem"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div className="cardAttributes">
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">
            Ataque:
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            Defesa:
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            Habilidade Especial:
            { cardAttr3 }
          </p>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>
        { cardTrunfo === true
          ? <p className="trunfo" data-testid="trunfo-card">Super Trunfo</p>
          : null }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
