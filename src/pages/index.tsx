import IntroPage from "@/components/templates/IntroPage";
import RegionPage from "@/components/templates/RegionPage";
import { Inter } from "@next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <IntroPage />
      <RegionPage />
    </>
  );
}
