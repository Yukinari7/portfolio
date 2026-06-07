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
  title: "Emem Princeson | FullStack Dev.",
  description: "A full stack developer building visually refined, high-performance web experience focused on modern design, seamless interactions and impactful user experience.",
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
