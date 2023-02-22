/** @type {import('next').NextConfig} */
const hostnames = [
  'placeimg.com',  
  'api.lorem.space',
  'placeimh.com',
  'picsum.photos',
  'upcdn.io',
  'www.elgrafico.com.ar',
  'api.escuelajs.co',
  'educacion30.b-cdn.net',
  'img.freepik.com',
  'i.pinimg.com'
]

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map(hostname => ({
        hostname
    }))   
  }
}


