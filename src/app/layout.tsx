import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furnicart Modular Private Limited | Premium Office Modular Solutions Kalyan, Thane",
  description: "Furnicart Modular Private Limited manufactures and installs premium corporate modular furniture, low-height open-plan workstations, full-height acoustic partitions, and executive cabin desks across Kalyan, Thane, Mumbai, and Gujarat. Direct-from-factory solutions.",
  keywords: ["office modular furniture Kalyan", "modular workstations Thane", "corporate interiors Mumbai", "office partitions Kalyan", "modular storage systems Thane", "commercial furniture manufacturer Maharashtra", "Furnicart Modular Private Limited"],
  openGraph: {
    title: "Furnicart Modular Private Limited | Premium B2B Workspace Modular Systems",
    description: "Premium corporate modular workstations, full-height partitions, and cabin furniture manufactured at our Wada & Vapi plants for clients in Kalyan, Thane, and Mumbai.",
    type: "website",
    locale: "en_IN",
  },
    icons: {
    icon: "/logo 1.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-page-bg text-secondary selection:bg-primary selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

