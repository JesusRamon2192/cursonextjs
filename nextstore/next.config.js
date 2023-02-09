/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects(){
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      }
    ]
  }
}


