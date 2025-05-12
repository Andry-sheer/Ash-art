import { Button } from "../../components/Button/Button";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import imgTech from "../../assets/images/13391.jpg";
import styles from "../../styles/Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <SubHeader />
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <Button className={styles.btnLink} text="[ Minimal ]" />
          <Button className={styles.btnLink} text="[ Modern ]" />
          <Button className={styles.btnLink} text="[ Smart Spaces ]" />
        </div>

          <div className={styles.containerTech}>
            <div className={styles.techInner}>
              <h2 className={styles.titleTech}>Our Technologies</h2>
              <p className={styles.descriptionTech}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                officiis ullam explicabo praesentium commodi nostrum! Quod,
                repellendus. Impedit, ipsum esse. Debitis repellat rem eos quod
                possimus illum beatae temporibus impedit error accusantium quas
                architecto voluptas molestiae at ullam iusto aperiam voluptate
                doloribus facilis, adipisci inventore. Aperiam temporibus ab
                perspiciatis consequatur dicta, a nihil molestiae eum qui eligendi
                aut ipsam error neque similique voluptas libero! Vitae
                necessitatibus repellendus odit qui perspiciatis ea illum
                cupiditate unde numquam minus nostrum non, accusantium enim dolor
                vel blanditiis, nemo veritatis voluptas tempora eligendi nam.
                Dolorum voluptatibus sint iste exercitationem consequuntur dolorem
                facere voluptas, eligendi ratione!{" "}
              </p>
            </div>

            <div className={styles.wrapperImg}>
              <img className={styles.techImg} src={imgTech} alt="our tech." />
            </div>
          </div>

          <div className={styles.wrapperSlider}>
            <h3 className={styles.galleryTitle}>Gallery</h3>
            <span className={styles.gallerySpan}></span>
          </div>
        </div>
    </div>
  );
};
