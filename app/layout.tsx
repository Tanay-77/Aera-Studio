import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AERA Studio · Fashion Photography & Creative Direction',
  description: 'Independent fashion photography & creative direction studio. Editorial, campaigns, and art direction.',
  openGraph: {
    title: 'AERA Studio · Fashion Photography & Creative Direction',
    description: 'Independent fashion photography & creative direction studio. Editorial, campaigns, and art direction.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AERA Studio · Fashion Photography & Creative Direction',
    description: 'Independent fashion photography & creative direction studio. Editorial, campaigns, and art direction.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
