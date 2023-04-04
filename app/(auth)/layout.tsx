import { FC } from "react";
import localFont from "@next/font/local";
import "@/styles/global.css";

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

interface AuthRootLayoutProps {
  children: React.ReactNode;
}

const AuthRootLayout: FC<AuthRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body
        className={`${gaegu.variable} grid justify-center items-center h-screen`}
      >
        {children}
      </body>
    </html>
  );
};

export default AuthRootLayout;
