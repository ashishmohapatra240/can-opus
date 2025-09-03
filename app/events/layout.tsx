import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SakkSham - Leadership Program | Can-Opus Engineering',
  description: 'SakkSham is a comprehensive leadership program designed to build the leaders of tomorrow at Can-Opus Engineering. Building Leaders with Passion!',
  keywords: ['leadership training', 'Can-Opus', 'SakkSham', 'leadership development', 'professional training'],
  openGraph: {
    title: 'SakkSham - Leadership Program | Can-Opus Engineering',
    description: 'Building Leaders with Passion! A transformational leadership program for the leaders of tomorrow.',
    type: 'website',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
