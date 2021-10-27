import React, { useState } from "react";
import "./CounterFunction.css";

export const CounterFunction = (props) => {
  const [state, setState] = useState({
    titulo: "Counter",
    subtitulo: "Function Component",
    resultado: 0,
  });

  const handleOnAdd = () => {
    setState({
      ...state,
      resultado: state.resultado + 1,
    });
    console.log(state);
  };
  const handleonReduce = () => {
    if (state.resultado <= 0) {
      setState({
        ...state,
        resultado: 0,
      });
    } else {
      setState({
        ...state,
        resultado: state.resultado - 1,
      });
    }
  };

  return (
    <div className="counterFunction">
      <div className="titulo">
        <h1>{state.titulo}</h1>
        <h4>{state.subtitulo}</h4>
      </div>
      <div className="control">
        <button onClick={handleonReduce}>-</button>
        <p>{state.resultado}</p>
        <button onClick={handleOnAdd}>+</button>
      </div>
    </div>
  );
};
