module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/wishes',
            permanent: true,
          },
        ]
      },
    images: {
        minimumCacheTTL: 60,
        domains: ['img.clerk.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'img.clerk.com',
              port: '',
              pathname: '/my-bucket/**',
            },
          ],
    },

  }