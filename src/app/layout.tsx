import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nocharisma.com"),
  title: "No Charisma — Independent Idea Factory",
  description:
    "No Charisma is an independent idea factory making digital products, identities, tools and experiments.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "No Charisma — Independent Idea Factory",
    description:
      "No Charisma is an independent idea factory making digital products, identities, tools and experiments.",
    url: "https://nocharisma.com",
    siteName: "No Charisma",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "No Charisma Independent Idea Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Charisma — Independent Idea Factory",
    description:
      "No Charisma is an independent idea factory making digital products, identities, tools and experiments.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
