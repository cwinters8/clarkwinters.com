export function loadAnalytics(cloudflareToken: string): void {
  const script = document.createElement("script");
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.defer = true;
  script.dataset.cfBeacon = JSON.stringify({ token: cloudflareToken });
  document.body.append(script);
}
