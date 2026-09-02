import { Poppins, Merriweather } from "next/font/google";
import "../styles/globals.css";
import { BackToTopButton } from "@/components/BackToTopButton";
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata = {
  title: "ASQUIJA",
  description: "",
  icons: "/structure/asquija/logoAsquija.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Carrega o script principal do Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LFT4BRQ1ZP"
          strategy="afterInteractive"
        />
        {/* Inicializa as configurações do GA4 */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LFT4BRQ1ZP');
          `}
        </Script>
      </head>
      <body
        className={`${poppins.variable} ${merriweather.variable} antialiased bg-white`}
      >
        <div className="min-h-full flex flex-col">
          <main className="flex-grow flex-1">{children}</main>
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}
