import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Resources",
  description: "Web Development  Resources",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "https://drive.google.com/drive/u/0/my-drive",
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": "https://drive.google.com/drive/u/0/my-drive",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
