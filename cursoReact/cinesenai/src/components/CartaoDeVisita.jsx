export const CartaoDeVisita = () => {
  const nome = "Diogo";
  const cidade = "santo andre";

  return (
    <div className="glass" style={{padding: "1rem", marginBottom: "1rem"}}>
      <h2>{nome}</h2>
      <p>Cidade: {cidade}</p>
      <p>Quero aprender react para criar sistemas completos.</p>
    </div>
  );
};