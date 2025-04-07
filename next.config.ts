/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', 'framer-motion-3d'],
  webpack: (config: import('webpack').Configuration) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three')
    };
    return config;
  }
}

module.exports = nextConfig;
