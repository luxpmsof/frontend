import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        console.log(initialProps.lang)
        return { ...initialProps }
    }


    render() {
        return (
            <Html lang="ko">
                <Head>
                    <link rel="icon" type="image/png" href="http://luxpmsoft.com/favicon.ico"></link>

                    <link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"></link>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
