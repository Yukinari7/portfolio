import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";
import { ViewTransitions } from "next-view-transitions";
import LoaderWrapper from "@/components/Loader/LoaderWrapper";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const antar = localFont({
  src: "../public/fonts/antar-bintang.woff2",
  variable: "--font-antar",
})

const clashDisplay = localFont({
  src: [
    {path: "../public/fonts/ClashDisplay-Regular.woff2",
      weight: '400',
      style: 'normal'
    },
    {path: "../public/fonts/ClashDisplay-Semibold.woff2",
      weight: '600',
      style: 'normal'
    },
  ],
  variable: '--font-clash',
})

const epilogue = localFont({
  src: 
    "../public/fonts/Epilogue-Medium.woff2",
   
    

})


//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
 // variable: "--font-geist-mono",
//  subsets: ["latin"],
//});

export const metadata: Metadata = {
  title: "Emem Princeson | FullStack Developer",
  description: "A full stack developer building visually refined, high-performance web experiences focused on modern design, seamless interactions and impactful user experience.",
  keywords: ["fullstack developer", "Emem Princeson", "web developer", "React", "Next.js", "JavaScript", "portfolio"],
  authors: [{ name: "Emem Princeson" }],
  openGraph: {
    title: "Emem Princeson | FullStack Developer",
    description: "A full stack developer building visually refined, high-performance web experiences.",
    type: "website",
    locale: "en_US",
    url: "https://ememprinceson.com",
    siteName: "Emem Princeson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emem Princeson | FullStack Developer",
    description: "A full stack developer building visually refined, high-performance web experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google3e1f9c1c7b06acb3.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`${epilogue.className} ${antar.variable} ${clashDisplay.variable} antialiased transition-colors duration-300`}
      >
        <Providers>
          <LoaderWrapper>
            <Nav />
            <ViewTransitions>
              {children}
            </ViewTransitions>
            <Footer />
          </LoaderWrapper>
        </Providers>
      </body>
    </html>
  );
}
