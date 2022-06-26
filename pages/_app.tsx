import {Global} from "@emotion/react";
import type {AppProps} from 'next/app'

import global from "../styles/global";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Global styles={global}/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
