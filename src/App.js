import "./App.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Banner from "./components/Landingbanner";
import Pricingplan from "./components/Pricingplan";
import SocialPosts from "./components/Socialposts";
import Footer from "./components/Footer";
import Setups from "./components/Setups";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Banner />
      <Pricingplan />
      <Setups />
      <SocialPosts />
      <Footer />
    </div>
  );
}

export default App;
