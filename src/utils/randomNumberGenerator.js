export const generateRandomNumber = (min, max, numerosGenerados) => {
  let numerosPosibles = [];

  for (let i = min; i <= max; i++) {
    if (!numerosGenerados.includes(i)) {
      numerosPosibles.push(i);
    }
  }
  const indice = Math.floor(Math.random() * numerosPosibles.length);
  const numeroGenerado = numerosPosibles[indice];
  return numeroGenerado;
};
