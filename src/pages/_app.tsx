import Head from "next/head";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilState } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import Header from "@/components/organisms/Header";
import MobileHeader from "@/components/organisms/MobileHeader";
import { Footer } from "@/components/organisms/Footer";
import { Nav } from "@/components/organisms/Nav";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";
import "@/styles/globals.css";
import { useEffect } from "react";
import Script from "next/dist/client/script";
import { GetServerSideProps } from "next";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWindowWidth = useWindowWidth();
  const queryClient = new QueryClient();

  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }

  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>PHILIP</title>
      </Head>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Script
            src="https://developers.kakao.com/sdk/js/kakao.js"
            onLoad={kakaoInit}
          />
          <ThemeProvider theme={theme}>
            {router.pathname.includes("main") ||
            router.pathname.includes("admin") ||
            router.pathname.includes("auth") ? (
              <>
                {isWindowWidth < 769 ? <MobileHeader /> : <Header />}
                <Nav />
                <Component {...pageProps} />
                <Footer />
              </>
            ) : (
              <>
                {isWindowWidth < 769 ? <MobileHeader /> : <Header />}
                {/* <Nav /> */}
                <Component {...pageProps} />
              </>
            )}
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
