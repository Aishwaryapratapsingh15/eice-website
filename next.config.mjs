import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["/src"] = path.resolve("./src");
    config.resolve.alias["/src/Product"] = path.resolve("./src/Product");
    return config;
  },
};

export default nextConfig;
