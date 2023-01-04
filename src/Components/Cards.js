import CardsCSS from "./Cards.module.css";
import cn from "classnames";

const Cards = (props) => {
  return (
    <section className="cards_container">
      {/* Image section with the tag  */}

      <div className={CardsCSS.img__cards}>
        <img src={props.img1} alt="writer" className={CardsCSS.img__width} />
        <p className={CardsCSS.img__position}>{props.sale}</p>
      </div>

      {/* Image section with the rating and desc */}

      <div className={cn(CardsCSS.img__width, CardsCSS.img__details)}>
        {/* ***** rating **** */}
        <div className={CardsCSS["img__details--flex"]}>
          <img src={props.img2} alt="rating-star" />
          <span>{props.rate}</span>
          <span className={CardsCSS.rating}>(6) • {props.country} </span>
        </div>
        {/* ***** desc ***** */}
        <p>{props.lifeLesson}</p>
        <p>
          <strong> From {props.price}</strong> / person
        </p>
      </div>
    </section>
  );
};

export default Cards;
