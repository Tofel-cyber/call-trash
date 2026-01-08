"use client";

import { useState } from "react";

export default function MyRequests() {
  const [requests, setRequests] = useState([
    {
      id: "REQ001",
      type: "Recyclable",
      status: "Confirmed",
      address: "123 Main Street, District 5",
      datetime: "Jan 10, 2026, 02:00 PM",
      description: "Approximately 3 bags of plastic and paper",
      actions: ["Pay", "Reschedule", "Cancel"] // Tambahkan "Pay" untuk pembayaran
    },
    {
      id: "REQ002",
      type: "Organic Waste",
      status: "Completed",
      address: "123 Main Street, District 5",
      datetime: "Jan 8, 2026, 10:00 AM",
      description: null,
      actions: []
    },
    {
      id: "REQ003",
      type: "General Waste",
      status: "Completed",
      address: "123 Main Street, District 5",
      datetime: "Jan 5, 2026, 09:00 AM",
      description: null,
      actions: []
    }
  ]);

  const statusColors = {
    Confirmed: "#10b981",
    Completed: "#6b7280"
  };

  const handleAction = async (id, action) => {
    if (action === "Pay") {
      if (!window.Pi) {
        alert("Pi Browser tidak terdeteksi. Gunakan Pi Browser untuk melakukan pembayaran.");
        return;
      }

      try {
        await window.Pi.createPayment(
          {
            amount: 1, // Harga 1 Pi per pengangkutan
            memo: `Pembayaran pengangkutan sampah untuk Request ${id}`,
            metadata: {
              service: "trash",
              requestId: id
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
              alert("Pembayaran berhasil! Terima kasih.");
              // Update status request menjadi "Paid" atau "Completed"
              setRequests(prev =>
                prev.map(req =>
                  req.id === id ? { ...req, status: "Paid", actions: ["Reschedule", "Cancel"] } : req
                )
              );
            },
            onCancel: () => alert("Pembayaran dibatalkan"),
            onError: () => alert("Terjadi kesalahan pada pembayaran")
          }
        );
      } catch (error) {
        alert("Gagal memulai pembayaran. Pastikan Anda menggunakan Pi Browser.");
      }
    } else if (action === "Reschedule") {
      alert(`Reschedule Request ${id}`);
      // Logika reschedule bisa kamu tambah di sini
    } else if (action === "Cancel") {
      alert(`Cancel Request ${id}`);
      // Logika cancel bisa kamu tambah di sini
    }
  };

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 16, padding: "0 16px 24px" }}>
      {requests.map(req => (
        <div
          key={req.id}
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <strong style={{ fontSize: 16 }}>{req.type}</strong>
            <span style={{
              backgroundColor: statusColors[req.status] || "#ccc",
              color: "white",
              borderRadius: 20,
              padding: "2px 12px",
              fontSize: 12,
              fontWeight: "600"
            }}>{req.status}</span>
          </div>

          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 12 }}>
            Request #{req.id}
          </div>

          <div style={{ fontSize: 14, color: "#4b5563", marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
            <span>📍</span>
            <span>{req.address}</span>
          </div>

          <div style={{ fontSize: 14, color: "#4b5563", marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
            <span>📅</span>
            <span>{req.datetime}</span>
          </div>

          {req.description && (
            <div style={{ fontSize: 14, color: "#4b5563", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span>⏰</span>
              <span>{req.description}</span>
            </div>
          )}

          {req.actions.length > 0 && (
            <div style={{ display: "flex", gap: 12 }}>
              {req.actions.map(action => (
                <button
                  key={action}
                  onClick={() => handleAction(req.id, action)}
                  style={{
                    flex: 1,
                    padding: "8px 0",
                    borderRadius: 8,
                    border: action === "Pay" ? "none" : "1.5px solid #ccc",
                    backgroundColor: action === "Pay" ? "#10b981" : "white",
                    color: action === "Pay" ? "white" : "#374151",
                    fontWeight: "600",
                    cursor: "pointer",
                    userSelect: "none"
                  }}
                >
                  {action === "Pay" ? "Bayar dengan Pi" : action}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}