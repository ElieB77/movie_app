import type { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/globals";
import { Layout } from "@/components/Layout";
import { DataProvider } from "@/contexts/DataContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataProvider>
      </ThemeProvider>
    </>
  );
}
