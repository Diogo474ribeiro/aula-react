// Crie o componente FichaDoFilme com um filme fixo: título, gênero e duração em minutos. Mostre a duração no formato "2h 46min" calculando as horas e os minutos com JavaScript dentro das chaves.


export const FichaDoFilme = () => {
  const titulo = "bob esponja o filme";
  const genero = "comedia";
  const duracaoMinutos = 90;

  const horas = Math.floor(duracaoMinutos / 60);
  const minutos = duracaoMinutos % 60;

  return (
    <div className="glass" style={{padding: "1rem", marginBottom: "1rem"}}>
        <h2>{titulo}</h2>
        <p>genero: {genero}</p>
        <p>duracao: {horas}h {minutos}min</p>
    </div>
  );
};