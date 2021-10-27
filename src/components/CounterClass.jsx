import React from "react";
import "./CounterClass.css";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: "Counter",
      subtitulo: "Class Component",
      resultado: 1,
    };
  }

  render() {
    return (
      <div className="counterClass">
        <div className="titulo">
          <h1>{this.state.titulo}</h1>
          <h4>{this.state.subtitulo}</h4>
        </div>
        <div className="control">
          <button
            onClick={() => {
              if (this.state.resultado <= 0) {
                this.setState({
                  ...this.state,
                  resultado: 0,
                });
              } else {
                this.setState({
                  ...this.state,
                  resultado: this.state.resultado - 1,
                });
                console.log(this.state);
              }
            }}
          >
            -
          </button>
          <p>{this.state.resultado}</p>
          <button
            onClick={() => {
              this.setState({
                ...this.state,
                resultado: this.state.resultado + 1,
              });
              console.log(this.state);
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
