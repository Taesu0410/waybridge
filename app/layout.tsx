import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: '/favicon.svg' },
  title: 'Jay | DAT · SAT · AP 전문 강사 · Founder of Waybridge',
  description: 'DAT · SAT · AP 전문 강사 Jay, Founder of Waybridge. DAT 수강생 8명 전원 AA 22점 이상, SAT 1550점 이상 비율 60%+, 누적 AP 5점 50개 이상. DAT·SAT·ACT·AP/IB 지도와 미국 대학·치대 입시 컨설팅.',
  openGraph: {
    title: 'Jay | Founder of Waybridge | SAT · AP/IB · 미국 입시',
    description: 'University of Pennsylvania School of Dental Medicine · SAT 1590 · DAT 27 · 매일 밀착관리',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/og-jay-founder-upenn.png',
        width: 1734,
        height: 907,
        alt: 'ADEA 행사 현장의 Jay, Founder of Waybridge · SAT · ACT · AP/IB · DAT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay | Founder of Waybridge | SAT · AP/IB · 미국 입시',
    description: 'University of Pennsylvania School of Dental Medicine · SAT 1590 · DAT 27 · 매일 밀착관리',
    images: ['/og-jay-founder-upenn.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
