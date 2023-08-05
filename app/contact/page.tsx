'use client'
import styles from 'styles/contact.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className={styles.contactLanding}>
      <div>
        <div className={styles.formHeader}>
          <span className={styles.headerText}> contact me </span>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.infoContainer}>
            <label className={styles.label}> name </label>
            <input className={styles.input} type='text' />
            <label className={styles.label}> email </label>
            <input className={styles.input} type='text' />
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