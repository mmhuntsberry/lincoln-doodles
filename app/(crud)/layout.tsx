import { FC } from "react";
import localFont from "@next/font/local";
import "@/styles/global.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { CartStateProvider } from "../../context/cartContext";

const gaegu = localFont({
  src: [
    {
      path: "../../public/fonts/Gaegu-Bold.ttf",
      // weight: "600",
    },
    {
      path: "../../public/fonts/Gaegu-Regular.ttf",
      // weight: "300",
    },
    {
      path: "../../public/fonts/Gaegu-Light.ttf",
      // weight: "100",
    },
  ],
  variable: "--font-gaegu",
});

interface DoodleRootLayoutProps {
  children: React.ReactNode;
}

const DoodleRootLayout: FC<DoodleRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className={`${gaegu.variable} h-screen`}>
        <CartStateProvider>
          <Header />
          <Navigation />
          {children}
        </CartStateProvider>
      </body>
    </html>
  );
};

export default DoodleRootLayout;
