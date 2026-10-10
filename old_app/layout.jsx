import './globals.css';
import localFont from 'next/font/local';

const saansTrial = localFont({
  src: [
    {
      path: '../public/fonts/SaansTRIAL-Light.ttf',
      weight: '300 400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SaansTRIAL-Medium.ttf',
      weight: '500 800',
      style: 'normal',
    },
  ],
  variable: '--font-saans',
  display: 'swap',
});

export const metadata = {
  title: 'Webnox — AI Native Company Building AI Solutions',
  description: 'Build software, AI agents, applications and digital products with Webnox. We provide AI development services that turn business ideas into production-ready AI solutions.',
  keywords: ['Webnox', 'AI Native Company', 'AI Solutions', 'AI development services', 'AI agents', 'LLM applications'],
  authors: [{ name: 'Webnox' }],
  openGraph: {
    title: 'Webnox — AI Native Company Building AI Solutions',
    description: 'Build software, AI agents, applications and digital products with Webnox. We provide AI development services that turn business ideas into production-ready AI solutions.',
    siteName: 'Webnox',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fffdfa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={saansTrial.variable}>
      <body className={saansTrial.className}>{children}</body>
    </html>
  );
}
