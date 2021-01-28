import Head from "next/head";
import Link from "next/link";

const Layout = ({children}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>INNOCEAN MÉXICO</title>
      <link rel="icon" type="image/png" href="favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet" /> 
    </Head>
    <div>
      <div>{children}</div>
    </div>
  </>
);

export default Layout;
