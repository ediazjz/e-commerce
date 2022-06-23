/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "s.gravatar.com",
      "lh3.googleusercontent.com",
    ],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
}

module.exports = nextConfig
