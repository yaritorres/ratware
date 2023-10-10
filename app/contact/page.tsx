'use client'
import styles from 'styles/contact.module.css';
import MainNavbar from '../components/mainNavbar';
import Container from 'react-bootstrap/Container';

export default function Contact() {
  return (
    <div>
      <MainNavbar />
      <div className={styles.contactLanding}>
        <div className={styles.formHeader}>
          <span className={styles.headerText}> contact me </span>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.logoAndInputContainer}>
            <div className={styles.infoContainer}>
              <label className={styles.label}> name </label>
              <input className={styles.input} type='text' />
              <label className={styles.label}> email </label>
              <input className={styles.input} type='text' />
            </div>
            <img className={styles.ratwareColorText} src='./ratware-text-color.png' />
          </div>
          <div className={styles.messageContainer}>
            <label className={styles.messageLabel}> message </label>
            <input className={styles.message} type='text' />
          </div>
        </form>
      </div>
    </div>
  )
}