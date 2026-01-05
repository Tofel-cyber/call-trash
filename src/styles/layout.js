import "../styles/globals.css";

export const metadata = {
  title: "Call Trash – Pi Network",
  description: "Panggil layanan pengangkutan sampah berbasis Pi Network"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
