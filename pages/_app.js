import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </Head>
   <Navbar/>
    <Component  {...pageProps} />
    <Footer/>
  </>
  )
}