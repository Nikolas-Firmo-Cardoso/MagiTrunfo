import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

// Para que o pai possa passar informações para os filhos precisamos declarar valores de state no constructor/super
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxAttr = 90;
    const maxTotalAttr = 210;
    const attr1Number = parseInt(cardAttr1, 10);
    const attr2Number = parseInt(cardAttr2, 10);
    const attr3Number = parseInt(cardAttr3, 10);

    if ((cardName && cardDescription && cardImage && cardRare !== '')
        && ((attr1Number + attr2Number + attr3Number) <= maxTotalAttr)
        && (attr1Number >= 0 && attr1Number <= maxAttr)
        && (attr2Number >= 0 && attr2Number <= maxAttr)
        && (attr3Number >= 0 && attr3Number <= maxAttr)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  // Req.4 ajuda de Imar Mendes
  onInputChange = (event) => {
    const { name, value, type } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? event.target.checked : value },
    () => this.isSaveButtonDisabled());
  }

  onSaveButtonClick = () => {
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
