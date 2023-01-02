import ImageSectionCSS from "./ImageSection.module.css";
import cn from "classnames";
import chair from "../img/chair.jpg";

const ImageSection = () => {
  return (
    <section className={cn(ImageSectionCSS.img__flexbox)}>
      <div className={ImageSectionCSS.img__first}>
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__second}>
        <img src={chair} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__third}>
        <img src={chair} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__fourth}>
        <img src={chair} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
      <div className={ImageSectionCSS.img__fifth}>
        <img src={chair} alt="" className={ImageSectionCSS.img} />
        <br />
        <img src={chair} alt="" className={ImageSectionCSS.img} />
      </div>
    </section>
  );
};

export default ImageSection;
