import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit /games/index.html instead of /games.html. The Apache host serves a
  // bare directory (/games/) as 403, since "games" is both a page and a folder.
  trailingSlash: true,
};

export default nextConfig;
