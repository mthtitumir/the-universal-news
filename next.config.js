/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "h.cricapi.com"
      },
      {
        protocol: "https",
        hostname: "g.cricapi.com"
      },
      {
        protocol: "https",
        hostname: "media.tenor.com"
      },
      {
        protocol: "https",
        hostname: "i0.wp.com"
      },
      {
        protocol : "https",
        hostname : "image.tmdb.org"
      },
      {
        protocol : "https",
        hostname : "i.ytimg.com"
      },
      {
        protocol : "https",
        hostname : "ibb.co"
      }
    ],
  },
}

module.exports = nextConfig
