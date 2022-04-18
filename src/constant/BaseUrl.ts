const dev = window.location.hostname === "localhost" ? "dev." : "";
const baseURL = `https://${dev}spectre-psnldev.dev:8202/` as const;

export default baseURL;
