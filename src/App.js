import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import HeroSection from "./Components/heroSection";
import Auction from "./Components/auction";
import Sellers from "./Components/sellers";
import Collection from "./Components/collection";

function App() {
  return (
 <>
 
<Header></Header>
<HeroSection></HeroSection> 
 <Auction></Auction>
 <Sellers></Sellers>
 <Collection></Collection>
 </>
  );
}

export default App;
