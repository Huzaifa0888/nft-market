
import Header from './Components/header'
import HeroSection from "./Components/heroSection";
import Auction from "./Components/auction";
import Sellers from "./Components/sellers";
import Collection from "./Components/collection";
import Explore from "./Components/explore";
import Works from "./Components/works";
import Footer from "./Components/footer";


function App() {
  return (
    <>
      <section className='overflow-x-hidden'>
        <Header></Header>
        <HeroSection></HeroSection>
        <Auction></Auction>
        <Sellers></Sellers>
        <Collection></Collection>
        <Explore></Explore>
        <Works></Works>
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
