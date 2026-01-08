let pi;

export async function initPi() {
  if (!window.Pi) return;
  pi = await window.Pi.init({
    version: "2.0",
    sandbox: false
  });
}

export async function loginPi() {
  return await pi.authenticate(["username", "payments"]);
}

export async function payWithPi() {
  return await pi.createPayment({
    amount: 0.01,
    memo: "Call Trash Pickup",
    metadata: { service: "call-trash" }
  });
}
