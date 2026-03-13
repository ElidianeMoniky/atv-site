export default function Profile() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src="/minha-foto.jpeg"
        alt="Minha foto"
        width={150}
        style={{ borderRadius: "50%" }}
      />

      <h2>Elidiane Moniky</h2>

      <p>
        Sou estudante de direito e sistemas para internet
        espero um dia poder criar soluções que unifiquem
        ambas as áreas!
      </p>
    </div>
  );
}