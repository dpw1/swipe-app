import { Inter } from "next/font/google";
import "./globals.css";
import "./GlobalCustom.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Rate My Picture | Receive feedback on your dating and social pictures.",
  description:
    "Receive feedback from everyday users for your dating and social pictures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        data-aos-easing="ease"
        data-aos-duration="1500"
        data-aos-delay="0"
        className={`${inter.className} `}>
        {children}
      </body>
    </html>
  );
}
