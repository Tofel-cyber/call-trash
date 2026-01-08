import axios from "axios";

export async function POST(req) {
  try {
    const { paymentId } = await req.json();

    if (!paymentId) {
      return Response.json({ error: "Payment ID is required" }, { status: 400 });
    }

    // Panggil API Pi untuk complete pembayaran
    const response = await axios.post(
      `https://sandbox-api.minepi.com/v2/payments/${paymentId}/complete`,
      {}, // Body kosong sesuai dokumentasi
      {
        headers: {
          Authorization: `Key ${process.env.PI_SECRET_KEY}`
        }
      }
    );

    if (response.data.status !== "completed") {
      console.log(`Payment ${paymentId} not completed:`, response.data);
      return Response.json({ error: "Payment not completed" }, { status: 400 });
    }

    console.log(`Payment ${paymentId} completed successfully`);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error completing payment:", error.response?.data || error.message);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}