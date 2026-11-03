import './globals.css';

export const metadata = {
  title: 'Solara — A brighter way to power your home',
  description: 'Discover simple solar solutions for a brighter, more sustainable home. Sample solar company website.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
