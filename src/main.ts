const yearElement = document.getElementById("year");
const thisYear = new Date().getFullYear();
yearElement && (yearElement.innerText = thisYear.toString());

import { loadAnalytics } from "./analytics";

if (import.meta.env.PROD) {
  const cloudflareToken = import.meta.env.VITE_CLOUDFLARE_TOKEN as string;
  document.addEventListener("DOMContentLoaded", () => {
    loadAnalytics(cloudflareToken);
  });
}
