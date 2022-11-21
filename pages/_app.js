import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700&display=swap" rel="stylesheet" />  
      </Head>
      
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp
