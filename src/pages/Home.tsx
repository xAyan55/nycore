import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="vps-hosting" className="relative">
        <Categories />
      </div>
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </>
  );
}
