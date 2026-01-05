import axios from "axios";

export async function POST(req) {
  const { paymentId } = await req.json();

  const response = await axios.get(
    `https://sandbox-api.minepi.com/v2/payments/${paymentId}`,
    {
      headers: {
        Authorization: `Key ${process.env.PI_SECRET_KEY}`
      }
    }
  );

  if (response.data.status !== "approved") {
    return Response.json(
      { error: "Payment not approved" },
      { status: 400 }
    );
  }

  return Response.json({ success: true });
}
