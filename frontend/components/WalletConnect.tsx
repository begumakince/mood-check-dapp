// Wallet bağlantısı için placeholder bileşen
// Freighter entegrasyonu bir sonraki adımda yapılacak

export default function WalletConnect() {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <p>Wallet not connected</p>
      <button disabled>Connect Wallet</button>
    </div>
  );
}
