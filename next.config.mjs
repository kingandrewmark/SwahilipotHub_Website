/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'res.cloudinary.com'], // ✅ Added Cloudinary
  },
};

export default nextConfig;
