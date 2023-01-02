import ContentCSS from "./Content.module.css";

const Content = () => {
  return (
    <section>
      <h1 className={ContentCSS.content__title}>Online Experiences</h1>
      <p className={ContentCSS.content__para}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Content;
