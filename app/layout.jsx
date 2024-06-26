import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Assuming Navbar is in the same directory
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <Navbar className="absolute top-0 left-0 overflow-hidden " />
        {children}
      </body>
    </html>
  );
}
