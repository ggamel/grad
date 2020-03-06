import React from 'react';
import App from 'next/app';
import Helmet from 'react-helmet';

export default class MyApp extends App {
  render() {
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
            { property: 'og:title', content: 'grad' },
          ]}
        >
          <body className="grad" />
          <style type="text/css">{`
            body { height: 100vh; margin: 0; padding: 0;}
            body:before { height: 100vh }
          `}</style>
        </Helmet>
      </>
    );
  }
}
