import "./globals.css";

export const metadata = {
  title: "Call-Trash | Pi Network",
  description: "Call Trash – Sampah Panggilan berbasis Pi Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
