import CardsCSS from "./Cards.module.css";
import writer from "../img/writer.jpg";
import star from "../img/star.png";
import cn from "classnames";

const Cards = () => {
  return (
    <section className="cards_container">
      {/* Image section with the tag  */}

      <div className={CardsCSS.img__cards}>
        <img src={writer} alt="writer" className={CardsCSS.img__width} />
        <p className={CardsCSS.img__position}>Sold out</p>
      </div>

      {/* Image section with the rating and desc */}

      <div className={cn(CardsCSS.img__width, CardsCSS.img__details)}>
        {/* ***** rating **** */}
        <div className={CardsCSS["img__details--flex"]}>
          <img src={star} alt="rating-star" />
          <span>5.0</span>
          <span className={CardsCSS.rating}>(6) • USA </span>
        </div>
        {/* ***** desc ***** */}
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <strong> From $136</strong> / person
        </p>
      </div>
    </section>
  );
};

export default Cards;
