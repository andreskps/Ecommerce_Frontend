/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },{
            protocol: 'http',
            hostname: 'res.cloudinary.com'
          },{
            protocol: 'https',
            hostname: 'res.cloudinary.com'
          },
          {
            protocol: 'https',
            hostname: 'www.mercadopago.com'
          }
        ],
      },
};

export default nextConfig;
