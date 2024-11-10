import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'santhigiriskillinstitute.com',
        port: '',
        pathname: '/assets/images/slider/1.jpg',
      },
      {
        protocol: 'https',
        hostname: 'santhigiriskillinstitute.com',
        port: '',
        pathname: '/assets/images/slider/2.jpg',
      },
      {
        protocol: 'https',
        hostname: 'santhigiriskillinstitute.com',
        port: '',
        pathname: '/assets/images/slider/3.jpg',
      },
      {
        protocol: 'https',
        hostname: 'santhigiriskillinstitute.com',
        port: '',
        pathname: '/assets/images/about_img.png',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com.com',
        port: '',
        pathname: '/photo-1463428537233-c84b754b2c84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
      },
    ],
  },
}

