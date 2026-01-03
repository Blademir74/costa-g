/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  /* ============================================
     OPTIMIZACIÓN DE IMÁGENES - LCP < 2.5s
     ============================================ */
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.cloudinary.com',
    },
    {
      protocol: 'https',
      hostname: '**.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'costa-g.vercel.app',
    },
    {
      protocol: 'https',
      hostname: 'neynkhynexamcodmtrxl.supabase.co',
      pathname: '/storage/v1/object/public/project-images/**',
    },
  ],

  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000,
  dangerouslyAllowSVG: true,
  contentDispositionType: 'attachment',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
},

  
  /* ============================================
     HEADERS DE SEGURIDAD Y CACHE
     ============================================ */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  /* ============================================
     OPTIMIZACIONES DE BUILD
     ============================================ */
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Compresión de output
  compress: true,
  
  // Experimental (Next.js 14+)
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
