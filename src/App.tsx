import { Outlet } from 'react-router';
import './App.css'
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
