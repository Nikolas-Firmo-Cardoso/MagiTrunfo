import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

// Para que o pai possa passar informações para os filhos precisamos declarar valores de state no constructor/super
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // os nomes das chaves do state devem ser sempre equivalentes aos names do que desejamos controlar, como por exemplo, os inputs do Form
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
      savedCards: [],
    };
  }

  // Req.5
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
      // [name] = isso é uma interpolação, significa que o nome não é name, mas sim o valor de name

      // digita algo no input do cardName -> a função inputChange() é chamada -> essa função atualiza o estado do cardName -> quando esse estado é atualizado, o input é renderizado novamente com o novo valor
      [name]: type === 'checkbox' ? event.target.checked : value },
    () => this.isSaveButtonDisabled());
  }

  // Req.6
  onSaveButtonClick = (event) => {
    event.preventDefault();
    // primeiro desestruturamos o estado para ele ser utilizado
    // esses caras estão recebendo informações do estado
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    // definifimos um novo objeto que recebe as chaves do estado com os valores que são dados nos inputs conforme são alterados.
    // esses caras estão sendo atribuidos ao newCard
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // por fim salvamos o card no savedCards através do [...prevState.savedCards, newCard], isso significa que fizemos um spread de savedCards para indicar que estamos usando apenas os elementos dele e não salvando novos arrays dentro do array, e ele é acessado pelo prevState, que é um input do setState, poderia ser qualquer palavra, mas pela documentação sabemos que o primeiro termo dado sermpre se refere ao estado anterior. Entao por fim, salvamos em savedCards o proprio estado anterior de savedCards e o novo newCard.

    // setState com arrow function indica que usaremos algo do estado anterior, sem arrow function significa que não necessitamos das informações anteriores
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      // Req.7 fica dentro do Req.6
      // setState é uma função assincrona, por isso mantemos o req.7 dentro do 6
    }), () => {
      const { savedCards } = this.state;
      const validateTrunfo = savedCards.some((element) => element.cardTrunfo === true);
      this.setState({ hasTrunfo: validateTrunfo });
    });
  }

  // // Req.7
  // hasTrunfo = () => {
  //   const { savedCards } = this.state;
  //   const validateTrunfo = savedCards.some((element) => element.cardTrunfo === true);
  //   if (validateTrunfo === true) {
  //     this.setState({ hasTrunfo: true });
  //   } else {
  //     this.setState({ hasTrunfo: false });
  //   }
  // };

  // Req.8
  exibCards() {
    const { savedCards } = this.state;
    const viewCards = savedCards.map((element) => (
      <Card
        cardName={ element.cardName }
        cardDescription={ element.cardDescription }
        cardAttr1={ element.cardAttr1 }
        cardAttr2={ element.cardAttr2 }
        cardAttr3={ element.cardAttr3 }
        cardImage={ element.cardImage }
        cardRare={ element.cardRare }
        cardTrunfo={ element.cardTrunfo }
        key={ element.cardName }
      />
    ));
    return viewCards;
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
        // esse { cardName } é o do this.state da linha 136, agora o cardName é uma prop que esta sendo passada para o Form.
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
        { this.exibCards() }
      </div>
    );
  }
}

export default App;
