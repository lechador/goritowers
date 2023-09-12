/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
      sharp: 'commonjs sharp',
      canvas: 'commonjs canvas'
    })
    return config
  }
}