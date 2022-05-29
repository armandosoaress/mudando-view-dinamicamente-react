import {useState} from "react";
function App(props) {
  const  [contador,setadicionar]=useState(1);
  function adicionar() {
    setadicionar(contador+1)
  }
  return (
   <div>
     <div>{contador}</div>
     <button onClick={adicionar}>Adicionar</button>
   </div>
  );
}
export default App;
