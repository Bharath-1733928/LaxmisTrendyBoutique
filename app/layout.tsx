import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Laxmi\'s Boutique',
  description: 'Premium Indian fashion and accessories',
  keywords: 'Indian fashion, sarees, kurtis, traditional wear, boutique, laxmisboutique',
  authors: [{ name: 'Laxmi\'s Boutique' }],
  creator: 'Laxmi\'s Boutique',
  publisher: 'Laxmi\'s Boutique',
  metadataBase: new URL('https://laxmisboutique.com'),
  alternates: {
    canonical: 'https://laxmisboutique.com',
  },
  openGraph: {
    title: 'Laxmi\'s Boutique - Traditional Indian Fashion',
    description: 'Discover elegant sarees, kurtis, and jewelry at Laxmi\'s Boutique',
    url: 'https://laxmisboutique.com',
    siteName: 'Laxmi\'s Boutique',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}