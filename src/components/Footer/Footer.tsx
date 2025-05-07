import { NavLink } from 'react-router-dom'

import styles from '../../styles/Footer.module.scss'
import Button from '../Button/Button'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__leftSide}>
          <h2 className={styles.footer__subTitle}>Ready to Redesign Your Everyday?</h2>

          <div className={styles.footer__leftInner}>
            <input type="text" placeholder='Enter your email here' />
            <Button className={styles.footer__button} text='Free Consultation' />
          </div>

          <div className={styles.footer__social}>
            <div className={styles.footer__follow}>
              <p className={styles.footer__followTitle}>Follow us</p>
            </div>

            <div className={styles.footer__chart}>
              <p className={styles.footer__chartTitle}>Let’s chat</p>
              <ul className={styles.footer__chartList}>
                <li className={styles.footer__chartLink}>
                  <NavLink to='' target={'_blank'}></NavLink>
                </li>
                <li className={styles.footer__chartLink}>
                  <NavLink to='' target={'_blank'}>
                    {}
                  </NavLink>
                </li>
                <li className={styles.footer__chartLink}>
                  <NavLink to='' target={'_blank'}>
                    {}
                  </NavLink>
                </li>
                <li className={styles.footer__chartLink}>
                  <NavLink to='' target={'_blank'}>
                    {}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footer__rightSide}>
          <p  className={styles.footer__catalog}>Catalog</p>
          <ul className={styles.footer__catalogList}>
            <li className={styles.footer__catalogLink}>
              <NavLink to="features">Features</NavLink>
            </li>
            /
            <li className={styles.footer__catalogLink}>
              <NavLink to="service">Service</NavLink>
            </li>
            /
            <li className={styles.footer__catalogLink}>
              <NavLink to="pricing-plants">Pricing & Plans</NavLink>
            </li>
          </ul>

          <div className={styles.footer__location}>
            <p className={styles.footer__locationItem}>Location</p>
            <p className={styles.footer__locationAddress}>61143, Kharkiv, Horizont 8</p>
          </div>

          <ul className={styles.footer__languages}> Languages
            <li className={styles.footer__languagesItem}>UA</li>
            <li className={styles.footer__languagesItem}>RU</li>
            <li className={styles.footer__languagesItem}>EN</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer