import ContentCSS from "./Content.module.css";

const Content = () => {
  return (
    <section>
      <p className={ContentCSS.content__title}>Online Experiences</p>
      <p className={ContentCSS.content__para}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Content;
