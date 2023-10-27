
import BestSellers from './components/BestSellers';
import Hero from './components/Hero';
import MobNavBar from './components/MobNavBar';
import Navbar from './components/Navbar';
import Category from './components/Category';

const App = () => {
  return (
    <main>
      <Navbar />
      <MobNavBar />
      <Hero />
      <Category />
      <BestSellers />
    </main>
  )
}

export default App;