// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: true,
//   swcMinify: false,
  
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/.git'],
    };

      //Prevent massive icon imports
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/icons-material": false,
    };

    return config;
  },
};

module.exports = nextConfig;