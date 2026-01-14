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
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  webpack: (config, { isServer }) => {
    // Increase file watcher limit
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/.git'],
    };
    return config;
  },
};

module.exports = nextConfig;
