// Uygulamadaki istatistikleri gösteren bileşen
// Şimdilik mock (sahte) veriler kullanıyoruz

export default function StatsDisplay() {
  return (
    <div style={{ marginTop: "2rem", borderTop: "1px solid black", paddingTop: "1rem" }}>
      <h2>Stats</h2>

      <ul>
        <li>Total moods logged: 42</li>
        <li>Your moods logged: 5</li>
      </ul>
    </div>
  );
}
