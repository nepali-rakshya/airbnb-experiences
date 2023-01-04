import "./index.css";
import NavBar from "./Components/NavBar";
import ImageSection from "./Components/ImageSection";
import Content from "./Components/Content";
import Cards from "./Components/Cards";

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
          img1="/img/writer.jpg"
          sale="Sold out"
          img2="/img/star.jpg"
          rate={5.0}
          country="USA"
          lifeLesson="Life lessons with Katie"
          price={$136}
        />
      </div>
    </div>
  );
};

export default App;
