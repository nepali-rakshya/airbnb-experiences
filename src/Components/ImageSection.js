import ImageSectionCSS from "./ImageSection.module.css";
import cn from "classnames";
import chair from "../img/chair.jpg";
import guitar from "../img/guitar.jpg";
import cook from "../img/cook.jpg";
import cooking from "../img/cooking.jpg";
import food from "../img/food.jpg";
import swimming from "../img/swimming.jpg";

const ImageSection = () => {
  return (
    <section className={cn(ImageSectionCSS.img__flexbox)}>
      <div className={ImageSectionCSS.img__first}>
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__second}>
        <img src={guitar} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={cook} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__third}>
        <img src={chair} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__fourth}>
        <img src={food} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__fifth}>
        <img src={swimming} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={cooking} alt="" className={ImageSectionCSS.img} />
      </div>
    </section>
  );
};

export default ImageSection;
