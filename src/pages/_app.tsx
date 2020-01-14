import React from "react";
import App, { AppProps } from "next/app";

import "../styles/index.scss";

class ExampleApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;

    return <Component {...pageProps} />;
  }
}

export default ExampleApp;
