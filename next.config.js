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
        domains: ['img.clerk.com'],
    },

  }