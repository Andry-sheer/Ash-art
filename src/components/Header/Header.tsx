import { NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import Logo from "../../assets/icons/Logo.svg";
import Button from "../Button/Button";
import { Search } from "lucide-react";


const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <NavLink to="/home">
            <img className={styles.header__logoImg} src={Logo} alt="logo" />
          </NavLink>
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
          <Button 
            className={styles.header__btnSearch}
            type="button"
            icon={<Search size={13} />}
            />
          <button className={styles.header__btnLogin}>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
