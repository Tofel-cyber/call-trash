export function initPi() {
  if (typeof window !== "undefined" && window.Pi) {
    window.Pi.init({
      version: "2.0",
      sandbox: true
    });
  }
}
