// Kullanıcının ruh hali seçmesi için butonlar
// Şimdilik sadece UI, blockchain bağlantısı yok

export default function MoodButtons() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <button style={{ marginRight: "1rem" }}>
        😊 Good
      </button>
      <button>
        😐 Neutral
      </button>
    </div>
  );
}
