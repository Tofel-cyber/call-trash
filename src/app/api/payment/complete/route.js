import axios from "axios";

export async function POST(req) {
  const { paymentId } = await req.json();

  await axios.post(
    `https://sandbox-api.minepi.com/v2/payments/${paymentId}/complete`,
    {},
    {
      headers: {
        Authorization: `Key ${process.env.PI_SECRET_KEY}`
      }
    }
  );

  return Response.json({ success: true });
}
