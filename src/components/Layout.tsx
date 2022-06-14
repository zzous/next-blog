import Header from './common/Header';
import Footer from './common/Footer';
import Nav from './common/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  )
}