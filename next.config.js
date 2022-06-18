/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "avatars.dicebear.com"],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
}

module.exports = nextConfig
