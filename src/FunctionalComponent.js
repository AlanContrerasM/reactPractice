import React, { useState } from 'react';



function FunctionalComponent(props) {


  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);

  const countUp = ()=>{
    setCount(count + 1)
  }

  //could be <button onClick={() => setCount(count + 1)}>
  return (
    <div>
        <h2>{props.title}</h2>
      <p>You clicked {count} times</p>
      <button onClick={countUp}>
        Click me
      </button>
    </div>
  );

  
}
//   // OR (arrow-function syntax)
  
//   const App = () => {
//     return <div className="App">Hello World!</div>;
//   };
  
//   // OR (implicit return)
  
//   const App = () => <div className="App">Hello World!</div>;


export default FunctionalComponent;