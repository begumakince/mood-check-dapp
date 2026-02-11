// Uygulamanın ana layout dosyası
// Tüm sayfalar bu layout'u kullanır

import "../styles/globals.css";

export const metadata = {
  title: "Mood Check dApp",
  description: "AI-assisted Stellar Mood Check dApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
