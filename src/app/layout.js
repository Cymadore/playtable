import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./components/layout/Head";
import BodyProvider from "./components/home/BodyProvider";
// import Providers from "./components/provider/SessionProviders";
import ContentsProvider from "./components/home/ContentsProvider";
import MenuPop from "./components/home/MenuPop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "플레이테이블",
  description: "청량리에 위치한 미니어처 게임장 플레이테이블 입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BodyProvider>
        <Head />
        <MenuPop />
        {/* <Providers> */}
          <ContentsProvider>{children}</ContentsProvider>
        {/* </Providers> */}
      </BodyProvider>
    </html>
  );
}
