import { NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import Logo from "../../assets/icons/Logo.svg";
import { Button } from "../Button/Button";
import { Search } from "lucide-react";


export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/home">
            <img className={styles.logoImg} src={Logo} alt="logo" />
          </NavLink>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.link} ${styles.linkActive}` 
                : styles.link} to="home">Home</NavLink>
          </li>

          <li className={styles.listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.link} ${styles.linkActive}` 
                : styles.link} to="/service">Service</NavLink>
          </li>

          <li className={styles.listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.link} ${styles.linkActive}` 
                : styles.link} to="/material">Material</NavLink>
          </li>

          <li className={styles.listItem}>
            <NavLink className={({ isActive }) => 
              isActive 
                ? `${styles.link} ${styles.linkActive}` 
                : styles.link} to="/works">Works</NavLink>
          </li>
        </ul>

        <div className={styles.buttonsHeader}>
          <Button 
            className={styles.btnSearch}
            type="button"
            icon={<Search size={13} />}
            />
          <button className={styles.btnLogin}>Login</button>
        </div>
      </div>
    </header>
  );
};
