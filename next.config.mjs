// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,

//   animals: [
//     {
//       hostname:'i.pinning.com'
//     }
//   ]
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
      
//     ],
//   },
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,

//   images: {
//     // multiple host allow করা
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'plus.unsplash.com', // কখনো কখনো unsplash এইটা use করে
//       },
//       {
//         protocol: 'https',
//         hostname: 'cdn.pixabay.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co',
//       },
//     ],

//     // optional fallback (simple way)
//     domains: [
//       'images.unsplash.com',
//       'plus.unsplash.com',
//       'cdn.pixabay.com',
//       'i.ibb.co',
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },

      // তোমার JSON data এর domain
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },

      // যদি i.ibb.co use করো future এ
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],

    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "cdn.pixabay.com",
      "i.ibb.co.com",
      "i.ibb.co",
    ],
  },
};

export default nextConfig;

