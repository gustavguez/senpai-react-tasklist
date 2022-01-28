import { useState } from "react";

export function MiContador() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  return (
    <div>
      <p>El valor de mi contador es: {contador}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}
