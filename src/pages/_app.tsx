import { AppProps } from "next/app";
import { FC } from "react";
import { AuthProvider } from "src/context/auth";
import "../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
