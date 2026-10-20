/**
 * Résout les chemins d'accès aux assets statiques (images, PDF, logos)
 * en tenant compte de la variable BASE_URL de Vite pour GitHub Pages ou Vercel.
 */
export function getAssetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${cleanBase}${cleanPath}`;
}
