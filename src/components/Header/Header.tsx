import { NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import Logo from "../../assets/icons/Logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img className={styles.header__logoImg} src={Logo} alt="logo" />
        </div>

        <ul className={styles.header__list}>
          <li className={styles.header__listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.header__link} ${styles.header__linkActive}` 
                : styles.header__link} to="home">Home</NavLink>
          </li>

          <li className={styles.header__listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.header__link} ${styles.header__linkActive}` 
                : styles.header__link} to="/service">Service</NavLink>
          </li>

          <li className={styles.header__listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.header__link} ${styles.header__linkActive}` 
                : styles.header__link} to="/material">Material</NavLink>
          </li>

          <li className={styles.header__listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.header__link} ${styles.header__linkActive}` 
                : styles.header__link} to="/works">Works</NavLink>
          </li>
        </ul>

        <div className={styles.header__buttonsHeader}>
          <button className={styles.header__btnSearch}>search</button>
          <button className={styles.header__btnLogin}>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
