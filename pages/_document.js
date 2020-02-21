import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: 'script I want to execute' }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument