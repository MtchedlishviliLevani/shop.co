import { Outlet } from 'react-router';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <div className='h-[250px] xl:h-[200px]'></div>
      <Footer />
    </>
  );
}

export default App;
