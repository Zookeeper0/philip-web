import Head from "next/head";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWindowWidth = useWindowWidth();
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>PHILIP</title>
      </Head>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            {router.pathname.includes("main") ? (
              <>
                {isWindowWidth < 769 ? <MobileHeader /> : <Header />}
                <Nav />
                <Component {...pageProps} />
                <Footer />
              </>
            ) : (
              <>
                {isWindowWidth < 769 ? <MobileHeader /> : <Header />}
                <Component {...pageProps} />
              </>
            )}
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
