import { useState } from "react";

export default function PickupForm({ jenisSampah }) {
  const [alamat, setAlamat] = useState("");
  const [tanggalWaktu, setTanggalWaktu] = useState("");

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <label style={{ fontWeight: "600" }}>
        Pickup Address
        <input 
          type="text"
          placeholder="Masukkan alamat lengkap"
          value={alamat}
          onChange={e => setAlamat(e.target.value)}
          style={{ marginTop: 8, padding: 12, borderRadius: 8, border: "1.5px solid #ccc", width: "100%" }}
        />
      </label>

      <label style={{ fontWeight: "600" }}>
        Preferred Date & Time
        <input
          type="datetime-local"
          value={tanggalWaktu}
          onChange={e => setTanggalWaktu(e.target.value)}
          style={{ marginTop: 8, padding: 12, borderRadius: 8, border: "1.5px solid #ccc", width: "100%" }}
        />
      </label>
      
      <button style={{
        backgroundColor: "#2f855a",
        color: "white",
        padding: "14px 0",
        borderRadius: 10,
        border: "none",
        fontWeight: "600",
        cursor: "pointer",
        fontSize: 16,
      }}>
        Pesan Penjemputan
      </button>
    </section>
  );
}