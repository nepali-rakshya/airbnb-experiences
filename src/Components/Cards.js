import CardsCSS from "./Cards.module.css";
import cn from "classnames";

const Cards = (props) => {
  return (
    <main className={CardsCSS.main__section}>
      <section>
        {/* Image section with the tag  */}

        <div className={CardsCSS.img__cards}>
          <img src={props.img1} alt="writer" className={CardsCSS.img__width} />
          {/* {props.openspot === 0 ? (
            <p className={CardsCSS.img__position}>{props.sale}</p>
          ) : (
            <p
              className={CardsCSS.img__position}
              style={{
                display: "none",
              }}
            >
              {props.sale}
            </p>
          )} */}
          {props.openspot === 0 && (
            <p className={CardsCSS.img__position}>{props.sale}</p>
          )}
        </div>

        {/* Image section with the rating and desc */}

        <div className={cn(CardsCSS.img__details)}>
          <img src={props.img2} alt="rating-star" />
          <span>{props.rate}</span>
          <span className={CardsCSS.rating}>(6) • {props.country} </span>
          <p>{props.lifeLesson}</p>
          <p>
            <strong> From {props.price}</strong> / person
          </p>
        </div>
      </section>
    </main>
  );
};

export default Cards;
