// Uygulamanın ana yerleşim dosyası
// Burada genel HTML yapısını tanımlarız

import "./globals.css";

export const metadata = {
  title: "Mood Check dApp",
  description: "A simple mood tracking dApp on Stellar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
