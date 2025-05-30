import { Poppins, Merriweather  } from "next/font/google";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${merriweather.variable} antialiased bg-white`}
      >
        <div className="min-h-full flex flex-col">
          <main className="flex-grow flex-1">{children}</main>
          <BackToTopButton />
        <Footer />
        </div>
        
      </body>
    </html>
  );
}
