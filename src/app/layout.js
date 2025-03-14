import localFont from "next/font/local"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";


const fontBold = localFont({
  src: "./fonts/Neue/NeueHaasDisplayBold.ttf",
  weight: "600",
  variable: "--font-bold",
  display: "swap",
  style: "normal"
});

const fontSemiBold = localFont({
  src: "./fonts/Neue/NeueHaasDisplayBlack.ttf",
  weight: "500",
  variable: "--font-semibold",
  display: "swap",
  style: "normal"
});


const fontLight = localFont({
  src: "./fonts/Neue/NeueHaasDisplayLight.ttf",
  weight: "500",
  variable: "--font-light",
  display: "swap",
  style: "normal"
});

const fontSemiLight = localFont({
  src: "./fonts/Neue/NeueHaasDisplayThin.ttf",
  weight: "100",
  variable: "--font-semilight",
  display: "swap",
  style: "normal"
});

const fontNormal = localFont({
  src: "./fonts/Neue/NeueHaasDisplayXThin.ttf",
  weight: "100",
  variable: "--font-normal",
  display: "swap",
  style: "normal"
});


export const metadata = {
  title: "Find Jobs - Find your dream job for all software development",
  description: "Discover thousands of job opportunities across industries. Find your dream job today with our powerful job search platform. Apply now and take the next step in your career!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`
        ${fontBold.variable}
        ${fontSemiBold.variable}
        ${fontLight.variable}
        ${fontSemiLight.variable}
        ${fontNormal.variable} 
        `}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <footer >
        </footer>
      </body>
    </html>
  );
}
