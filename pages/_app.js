import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme/theme";
import FullLayout from "../src/layouts/FullLayout";
import "../styles/globals.css";
import { Provider } from 'react-redux';
import store from '../States/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cook It Up</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <FullLayout>
            <Component {...pageProps} />
          </FullLayout>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
