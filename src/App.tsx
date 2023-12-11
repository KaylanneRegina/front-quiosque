
import BestSellers from './components/BestSellers';
import Hero from './components/Hero';
import MobNavBar from './components/MobNavBar';
import Navbar from './components/Navbar';
import Category from './components/Category';
import BannerSection from './components/BannerSection';
import BlogSection from './components/BlogSection';
import Email from './components/Email';

const App = () => {
  return (
    <main>
      <Navbar />
      <MobNavBar />
      <Hero />
      <Category />
      <BestSellers />
      <BannerSection />
      <BlogSection />
      <Email />
    </main>
  )
}

export default App;