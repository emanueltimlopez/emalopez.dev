import type { Metadata } from "next";
import { Inknut_Antiqua, Inria_Sans } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./posthog";

const inria = Inria_Sans({ subsets: ['latin'], weight: ['300', '700'], variable: '--font-inria' });
const inknut = Inknut_Antiqua({ subsets: ['latin'], weight: ['300', '700'], variable: '--font-inknut' });

export const metadata: Metadata = {
  title: "Emanuel López",
  description: "Product-led Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={`${inria.variable} ${inknut.variable}`}>{children}</body>
      </CSPostHogProvider>
    </html >
  );
}
