/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    routerApi: "http://localhost:5000/api/",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
