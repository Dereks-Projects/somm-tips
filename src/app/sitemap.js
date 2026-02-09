export default function sitemap() {
  const baseUrl = "https://somm.tips";

  const staticPages = [
    "",
    "/wine-recommendations",
    "/classic-pairings",
    "/ordering-wine",
    "/vintages",
    "/education",
    "/cocktails",
    "/about",
    "/privacy",
    "/terms",
    "/cookies",
    "/content-policy",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/wine-recommendations" ? 0.9 : 0.7,
  }));
}