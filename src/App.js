import './App.scss';

// import Footer from './components/footer/footer.component';
// import SubscribeNow from './components/subscribe-now/subscribe-now.component';
import LandingPage from './pages/landing-page/landing-page.component';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/about.component';
import Layout from './components/layout/layout.component';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
