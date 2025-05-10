// import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { IconComponent } from '../IconComponent/IconComponent'
import { FaFacebookSquare, FaGooglePlusG, FaInstagram, FaTelegramPlane, FaViber, FaWhatsapp, FaYoutube } from "react-icons/fa";
import styles from '../../styles/Footer.module.scss'
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2 className={styles.title}>Ready to Redesign Your Everyday?</h2>
          <div className={styles.formContainer}>
            <Input 
              className={styles.inputEmail}
              placeholder='Enter your email here'
            />
            <Button 
              className={styles.btnConsultation}
              text='Free Consultation'
            />
          </div>

          <div className={styles.feedBack}>
            <div className={styles.followContainer}>
              <p className={styles.followUs}>Follow us</p>
              <ul className={styles.followList}>
                <li className={styles.followListItem}>
                  <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                    <IconComponent fill='#212121' icon={FaFacebookSquare} />
                  </a>
                </li>
                <li className={styles.followListItem}>
                  <a href='https://plus.google.com' target='_blank' rel='noopener noreferrer'>
                    <IconComponent fill='#212121' icon={FaGooglePlusG} />
                  </a>
                </li>
                <li className={styles.followListItem}>
                  <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                    <IconComponent fill='#212121' icon={FaInstagram} />
                  </a>
                </li>
                <li className={styles.followListItem}>
                  <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                    <IconComponent fill='#212121' icon={FaYoutube} />
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.chatContainer}>
              <p className={styles.chatTitle}>Let’s chat</p>
              <ul className={styles.chatList}>
                <li className={styles.chatItem}>
                  <a href='https://www.viber.com' target='_blank' rel='noopener noreferrer'>
                    <IconComponent fill='#212121' icon={FaViber} />
                  </a>
                </li>
                <li className={styles.chatItem}>
                  <a href='https://web.telegram.org' target='_blank' rel='noopener noreferrer'>
                    <IconComponent fill='#212121' icon={FaTelegramPlane} />
                  </a>
                </li>
                <li className={styles.chatItem}>
                  <a href='https://www.whatsapp.com' target='_blank' rel='noopener noreferrer'>
                    <IconComponent fill='#212121' icon={FaWhatsapp} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.rightContainer}>
            <h4 className={styles.rightTitle}>Catalog</h4>
            <ul className={styles.rightList}>
              <li>
                <NavLink className={({isActive})=> isActive ? `${styles.rightListItem} ${styles.rightListItemActive}` : styles.rightListItem} to='features'>Features</NavLink>
              </li>
              /
              <li>
                <NavLink className={({isActive})=> isActive ? `${styles.rightListItem} ${styles.rightListItemActive}` : styles.rightListItem} to='/service'>Service</NavLink>
              </li>
              /
              <li>
                <NavLink className={({isActive})=> isActive ? `${styles.rightListItem} ${styles.rightListItemActive}` : styles.rightListItem} to='/pricing-plans'>Pricing & Plans</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.rightLocationContainer}>
            <h4 className={styles.rightLocation}>Location</h4>
            <p className={styles.rightLocationAddress}>61240, Kharkiv, Horizont 8/1 Office</p>

            <h4 className={styles.rightLanguageItem}>Language</h4>
              <ul className={styles.rightLanguageList}>
                <li>En</li>
                <li>Ua</li>
                <li>Ru</li>
              </ul>
          </div>



        </div>
      </div>
    </footer>
  )
}