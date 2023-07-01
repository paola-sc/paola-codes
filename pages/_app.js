import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
