"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import PickupForm from "../components/PickupForm";
import Footer from "../components/Footer";
import MyRequests from "../components/MyRequests";

import { useState } from "react";

const wasteTypes = [
  { id: "general", label: "General Waste", icon: "🗑️" },
  { id: "recyclable", label: "Recyclable", icon: "♻️" },
  { id: "organic", label: "Organic Waste", icon: "🌱" },
  { id: "bulky", label: "Bulky Items", icon: "📦" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("request");
  const [selectedWaste, setSelectedWaste] = useState("bulky");

  return (
    <>
      <Header />

      <main className="container" style={{ maxWidth: 420, margin: "auto", padding: 16, fontFamily: "system-ui, sans-serif" }}>
        <Hero username="tofelcapcuss78" />
        
        {/* Tab Navigasi */}
        <nav style={{
          display: "flex",
          gap: 8,
          marginBottom: 24,
          backgroundColor: "#f3f4f6",
          borderRadius: 8,
          padding: 4
        }}>
          {[
            { id: "request", label: "Request", icon: "♻️" },
            { id: "myrequests", label: "My Requests", icon: "📅" },
            { id: "info", label: "Info", icon: "ℹ️" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: "12px 0",
                borderRadius: 8,
                border: activeTab === tab.id ? "2px solid #2f855a" : "1px solid transparent",
                backgroundColor: activeTab === tab.id ? "white" : "transparent",
                fontWeight: activeTab === tab.id ? "600" : "400",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                color: activeTab === tab.id ? "#2f855a" : "#444"
              }}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              <span style={{ fontSize: 18 }}>{tab.icon}</span>{tab.label}
            </button>
          ))}
        </nav>

        {/* Konten Tab */}
        {activeTab === "request" && (
          <>
            <section style={{ marginBottom: 24 }}>
              <p style={{ fontWeight: "600", marginBottom: 12 }}>Select Waste Type</p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 12
              }}>
                {wasteTypes.map(type => (
                  <ServiceCard
                    key={type.id}
                    icon={type.icon}
                    label={type.label}
                    aktif={selectedWaste === type.id}
                    onClick={() => setSelectedWaste(type.id)}
                  />
                ))}
              </div>
            </section>

            <PickupForm jenisSampah={selectedWaste} />
          </>
        )}

        {activeTab === "myrequests" && <MyRequests />}

        {activeTab === "info" && (
  <section style={{ padding: "0 16px 24px", lineHeight: 1.6, color: "#333" }}>
    <h2 style={{ marginBottom: 12 }}>Tentang Lumensia Call-trash</h2>
    <p>
      Call-trash adalah solusi pengelolaan sampah yang digerakkan oleh komunitas
      berbasis jaringan Pi Network. Kami menghubungkan warga dengan layanan kebersihan
      lokal untuk pengumpulan sampah secara on-demand, sehingga lingkungan menjadi
      lebih bersih dan berkelanjutan.
    </p>

    <p>
      Call-trash membantu menyediakan layanan ramah lingkungan dan memberdayakan 
      komunitas lokal dalam mengelola sampah secara efektif dan efisien.
      Dengan teknologi blockchain Pi Network, transaksi dan pelacakan layanan menjadi transparan dan aman.
    </p>

    <p>
      Bergabunglah bersama kami untuk membuat perubahan positif dengan memanfaatkan
      layanan pengambilan sampah berbasis teknologi terbaru.
    </p>

    {/* Key Features */}
    <h3 style={{ marginTop: 24, marginBottom: 12, color: "#2f855a" }}>Fitur Utama</h3>

    <ul style={{ listStyleType: "none", paddingLeft: 0, color: "#444" }}>
      <li style={{ marginBottom: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 20, color: "#10b981" }}>🌿</span>
        <div>
          <strong>Fokus Komunitas</strong><br />
          Mendukung petugas kebersihan lokal dan lingkungan yang lebih bersih.
        </div>
      </li>

      <li style={{ marginBottom: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 20, color: "#10b981" }}>⏰</span>
        <div>
          <strong>Layanan Terpercaya</strong><br />
          Penjemputan terjadwal oleh tim pengumpulan sampah profesional.
        </div>
      </li>

      <li style={{ marginBottom: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 20, color: "#10b981" }}>💰</span>
        <div>
          <strong>Integrasi Pembayaran Pi</strong><br />
          Pembayaran layanan mudah menggunakan cryptocurrency Pi.
        </div>
      </li>
    </ul>
  </section>
)}
      </main>

      <Footer />
    </>
  );
}