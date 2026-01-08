export default function Header() {
  return (
    <header style={{
      backgroundColor: "#2f855a",
      color: "white",
      padding: "16px",
      fontWeight: "bold",
      fontSize: 18,
      borderRadius: "0 0 12px 12px",
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>
      <div style={{ fontSize: 24 }}>♻️</div>
      <div>LUMENSIA Call-trash</div>
    </header>
  );
}