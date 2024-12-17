import { Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: " Referral Form | Activity Care Services",
  description: "Activity Care Services Referral Form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
