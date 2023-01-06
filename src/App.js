import "./index.css";
import NavBar from "./Components/NavBar";
import ImageSection from "./Components/ImageSection";
import Content from "./Components/Content";
import Cards from "./Components/Cards";
import data from "./Components/data";

const App = () => {
  const dataElements = data.map((item) => {
    return (
      <Cards
        key={item.id}
        img1={item.img1}
        sale={item.sale}
        img2={item.img2}
        rate={item.rate}
        country={item.country}
        lifeLesson={item.lifeLesson}
        price={item.price}
      />
    );
  });

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
      <div className="cards inner_nav--margin">{dataElements}</div>
    </div>
  );
};

export default App;
