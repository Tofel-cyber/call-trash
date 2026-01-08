"use client";

export default function MyRequests() {
  const requests = [
    {
      id: "REQ001",
      type: "Recyclable",
      status: "Confirmed",
      address: "123 Main Street, District 5",
      datetime: "Jan 10, 2026, 02:00 PM",
      description: "Approximately 3 bags of plastic and paper",
      actions: ["Reschedule", "Cancel"]
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
  ];

  const statusColors = {
    Confirmed: "#10b981", // hijau
    Completed: "#6b7280"  // abu-abu gelap
  };

  const handleAction = (id, action) => {
    alert(`Action: ${action} on request ${id}`);
    // Implementasikan logika reschedule atau cancel sesuai kebutuhan
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
          {/* Header jenis dan status */}
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

          {/* Request ID */}
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 12 }}>
            Request #{req.id}
          </div>

          {/* Detail alamat dan tanggal */}
          <div style={{ fontSize: 14, color: "#4b5563", marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
            <span>📍</span>
            <span>{req.address}</span>
          </div>
          <div style={{ fontSize: 14, color: "#4b5563", marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
            <span>📅</span>
            <span>{req.datetime}</span>
          </div>

          {/* Deskripsi jika ada */}
          {req.description && (
            <div style={{ fontSize: 14, color: "#4b5563", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span>⏰</span>
              <span>{req.description}</span>
            </div>
          )}

          {/* Tombol aksi jika ada */}
          {req.actions.length > 0 && (
            <div style={{
              display: "flex",
              gap: 12
            }}>
              {req.actions.map(action => (
                <button
                  key={action}
                  onClick={() => handleAction(req.id, action)}
                  style={{
                    flex: 1,
                    padding: "8px 0",
                    borderRadius: 8,
                    border: "1.5px solid #ccc",
                    backgroundColor: "white",
                    color: "#374151",
                    fontWeight: "600",
                    cursor: "pointer",
                    userSelect: "none"
                  }}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}