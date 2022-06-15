import Header from './common/Header';
import Footer from './common/Footer';
import Nav from './common/Nav';

export default function Layout({ children }) {
  return (
    <div id='wrap'>
      <Header />
      <Nav />
      <div id='container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}