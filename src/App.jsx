import Banner from "./Components/Banners/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Courses from "./Components/Layouts/Courses/Courses";
import Layour1 from "./Components/Layouts/Layout1/Layour1";
import Logo from "./Components/Logs/Logo";
import Navbar from "./Components/Navbar/Navbar";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <div>
        <Banner />
        <Navbar />
        <div>
          <Header />
          <Logo />
          <Layour1 />
          <Courses />
          <Testimonial />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
