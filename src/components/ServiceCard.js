export default function ServiceCard({ icon, label, aktif, onClick }) {
  return (
    <button 
      onClick={onClick} 
      style={{
        borderRadius: 8,
        border: aktif ? "2px solid #2f855a" : "1.5px solid #ccc",
        backgroundColor: aktif ? "#e6f4ea" : "white",
        padding: 16,
        fontSize: 14,
        color: "#333",
        cursor: "pointer",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ fontSize: 36 }}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}