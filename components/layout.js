import Head from "next/head";

const Layout = ({children}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>INNOCEAN MÉXICO</title>
      <link rel="icon" type="image/png" href="favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
    </Head>

    {children}
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
  </>
);

export default Layout;
