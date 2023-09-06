/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config) => {
        config.externals.push({
          sharp: 'commonjs sharp',
          canvas: 'commonjs canvas'
        })
        return config
      }
};
