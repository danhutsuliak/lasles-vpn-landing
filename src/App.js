import './App.scss';
import Hero from './components/hero/hero.component';
import Header from './components/header/header.component';
import Stats from './components/stats/stats.component';
import Features from './components/features/features.component';
import ChooseYourPlan from './components/choose-your-plan/choose-your-plan.component';
import Locations from './components/locations/locations.component';
import Testimonials from './components/testimonials/testimonials.component';
import { TESTIMONIAL_DATA } from './data/testimonial.data';
import Footer from './components/footer/footer.component';
import SubscribeNow from './components/subscribe-now/subscribe-now.component';

function App() {
  return (
    <div className='app'>
      <section className='white-bg-color'>
        <Header />
        <Hero />
        <Stats />
        <Features />
      </section>
      <section className='darker-bg-color'>
        <ChooseYourPlan />
        <Locations />
        <Testimonials testimonials={TESTIMONIAL_DATA.testimonials} />
      </section>
      <SubscribeNow />
      <Footer />
    </div>
  );
}

export default App;
