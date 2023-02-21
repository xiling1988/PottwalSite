import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0'
        ></meta>
        <head>
        <link href="styles/fonts/CascadiaCode-2111.01/ttf/CascadiaMono.ttf" rel="stylesheet" />
        <link rel="shortcut icon" href="/img/pottwal_logo.png"></link>
</head>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}