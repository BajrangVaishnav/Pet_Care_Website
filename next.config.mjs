/** @type {import('next').NextConfig} */
const basePath =
  process.env.GITHUB_PAGES === "true" ? "/Pet_Care_Website" : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
