import "./index.css";
import NavBar from "./Components/NavBar";
import ImageSection from "./Components/ImageSection";
import Content from "./Components/Content";
import Cards from "./Components/Cards";
import writer from "./img/writer.jpg";
import star from "./img/star.png";
import girl1 from "./img/girl1.jpg";
import girl2 from "./img/girl2.jpg";
import girl3 from "./img/girl3.jpg";

const App = () => {
  return (
    <div className="container">
      <div className="inner__nav--border">
        <div className="inner_nav--margin">
          <NavBar />
        </div>
      </div>
      <div className="inner__img inner__nav--margin">
        <ImageSection />
      </div>
      <div className="inner_nav--margin">
        <Content />
      </div>
      <div className="cards inner_nav--margin">
        <Cards
          img1={writer}
          sale="Sold out"
          img2={star}
          rate={5}
          country="USA"
          lifeLesson="Life lessons with Katie"
          price={"$" + 136}
        />
        <Cards
          img1={girl1}
          sale="Order"
          img2={star}
          rate={4.9}
          country="England"
          lifeLesson="Learn Digital Marketing"
          price={"$" + 70}
        />
        <Cards
          img1={girl2}
          sale="Order"
          img2={star}
          rate={4.9}
          country="Britain"
          lifeLesson="Learn abroad in Sidney"
          price={"$" + 200}
        />
        <Cards
          img1={girl3}
          sale="Sold out"
          img2={star}
          rate={3.9}
          country="Asia"
          lifeLesson="Let's learn coding"
          price={"$" + 500}
        />
      </div>
    </div>
  );
};

export default App;
