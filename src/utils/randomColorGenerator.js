function randomColorGenerator(){
  const colors = ["#FD8B4B", "#F45A5A", "#8AFD6D", "#7B7E92", "#FFD976", "#F37FEF", "#5FC7C2", "#D6D6D6", "#03FCC2", "#F29BC7", "#8FEB34"];

  const randomNumber = Math.round(Math.random() * 10);

  return colors[randomNumber];
}

export default randomColorGenerator;