import React from 'react';
import App from 'next/app';
import Helmet from 'react-helmet';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          // title="grad"
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            { property: 'og:title', content: 'Hello next.js!' },
          ]}
        >
          <body className="grad" />
          <style type="text/css">{`
            body { height: 100vh}
          `}</style>
        </Helmet>
        <Component {...pageProps} />
      </>
    );
  }
}