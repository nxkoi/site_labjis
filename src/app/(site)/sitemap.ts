export default function sitemap() {
  const base = "https://labji.inf.ufg.br";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/sobre`, lastModified: new Date() }
  ];
}
