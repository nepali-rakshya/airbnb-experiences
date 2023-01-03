import ImageSectionCSS from "./ImageSection.module.css";
import cn from "classnames";
import guitar from "../img/guitar.jpg";
import cook from "../img/cook.jpg";
import cooking from "../img/cooking.jpg";
import food from "../img/food.jpg";
import swimming from "../img/swimming.jpg";
import singing from "../img/singing.jpg";
import piano from "../img/piano.jpg";
import temple from "../img/temple.jpg";
import home from "../img/home.jpg";

const ImageSection = () => {
  return (
    <section className={cn(ImageSectionCSS.img__flexbox)}>
      <div className={ImageSectionCSS.img__first}>
        <img src={guitar} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__second}>
        <img src={food} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={cook} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__third}>
        <img src={home} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={piano} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__fourth}>
        <img src={swimming} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={singing} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__fifth}>
        <img src={temple} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={cooking} alt="" className={ImageSectionCSS.img} />
      </div>
    </section>
  );
};

export default ImageSection;
