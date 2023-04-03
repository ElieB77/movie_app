import type { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/globals";
import { Layout } from "@/components/Layout";
import { BookmarkProvider } from "@/contexts/BookmarkContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BookmarkProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BookmarkProvider>
      </ThemeProvider>
    </>
  );
}
