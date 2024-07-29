import Textosnova from "../components/home/header/Textosnova";
import VideoBack from "../components/home/header/VideoBack";
import AboutUs from "../components/home/about/AboutUs";
import Services from "../components/home/services/Services";
import Counter from "../components/home/counter/Counter";
// import Testimonial from "../components/home/testimonials/Testimonial";
import Callto from "../components/home/calltos/Callto";
import Member from "../components/home/members/Member";
import Blog from "../components/home/blog/Blog";
import Portfolio from "../components/home/portfolio/Portfolio";
const Home = () => {
  return (
    <>
      <section className="hero-section set-bg" style={{ display: "flex", justifyContent: "center" }}>
        <Textosnova />
        <VideoBack />
      </section>
      <AboutUs />
      <Services />
      <Portfolio />
      <Counter />

      {/* <Testimonial /> */}
      <Callto />
      <Member />
      <Blog />
    </>
  );
};

export default Home;
