import React from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';

const sampleQuote =
{
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection": "Left"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({ quote: sampleQuote })

  }
    handleClick(){
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response => response.json())
        .then(data => {
          this.setState({
            quote: data[0],
          })
        })
      }


    render(){
      return (
        <div >

          <GenerateQuote selectQuote={()=> this.handleClick()} />
          <DisplayQuote quote={this.state.quote} />

        </div>

      );
    }
  };

export default App;