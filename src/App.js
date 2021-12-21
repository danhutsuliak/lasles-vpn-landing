import './App.scss';
import LandingPage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/about.component';
import Layout from './components/layout/layout.component';
import FeaturesPage from './pages/features/features.component';
import TestimonialsPage from './pages/testimonials-page/testimonials-page.component';
import PricingPage from './pages/pricing-page/pricing-page.component';
import HelpPage from './pages/help-page/help-page.component';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='features' element={<FeaturesPage />} />
          <Route path='testimonials' element={<TestimonialsPage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='help' element={<HelpPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
