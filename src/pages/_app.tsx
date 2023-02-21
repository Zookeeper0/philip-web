import Head from "next/head";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import Header from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Nav } from "@/components/organisms/Nav";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
                <Header />
                <Nav />
                <Component {...pageProps} />
                <Footer />
              </>
            ) : (
              <>
                <Header />
                <Component {...pageProps} />
              </>
            )}
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
