"use client";

import { useEffect, useState } from "react";
import { initPi } from "../lib/pi";

export default function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    initPi();
  }, []);

  const callTrash = async () => {
    try {
      setStatus("⏳ Memproses permintaan...");

      await window.Pi.createPayment(
        {
          amount: 1,
          memo: "Call Trash Pickup",
          metadata: {
            service: "trash",
            type: "pickup"
          }
        },
        {
          onReadyForServerApproval: async (paymentId) => {
            await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId })
            });
          },

          onReadyForServerCompletion: async (paymentId) => {
            await fetch("/api/payment/complete", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId })
            });
            setStatus("✅ Petugas sampah akan datang");
          },

          onCancel: () => setStatus("❌ Dibatalkan"),
          onError: () => setStatus("⚠️ Terjadi kesalahan")
        }
      );
    } catch {
      setStatus("⚠️ Pi Browser tidak terdeteksi");
    }
  };

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28 }}>♻️ Call Trash</h1>
      <p>Layanan panggilan sampah berbasis Pi Network</p>

      <button
        onClick={callTrash}
        style={{
          marginTop: 20,
          backgroundColor: "#16a34a",
          color: "#fff",
          padding: "14px 20px",
          borderRadius: 10
        }}
      >
        Panggil Petugas (1 Pi)
      </button>

      <p style={{ marginTop: 16 }}>{status}</p>
    </main>
  );
}
