export default function Hero({ username }) {
  return (
    <section style={{ marginBottom: 24 }}>
      <h2>Welcome, {username}</h2>
      <p style={{ color: "#555", fontSize: 14 }}>
        Request on-demand waste collection services for a cleaner neighborhood
      </p>
    </section>
  );
}