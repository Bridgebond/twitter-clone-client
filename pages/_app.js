import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { MoralisProvider } from "react-moralis";

export default function App({
  Component,
  pageProps
}) {
  return (
      <RecoilRoot>
        <MoralisProvider initializeOnMount={false}>
        <Component {...pageProps} />
        </MoralisProvider>
      </RecoilRoot>
  );
}

// @brigdebond