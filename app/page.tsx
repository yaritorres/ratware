'use client'
import styles from '../styles/homePage.module.css';
import Card from 'react-bootstrap/Card';
import MainNavbar from './components/mainNavbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainNavbar />
      <div className={styles.landing}>
        <div className={styles.welcome}>
          <span style={{fontSize: '200px', paddingBottom: '0'}}> Welcome. </span>
          <span style={{fontSize: '50px'}} id={styles.animated}> Click the products tab and find true love. </span>
        </div>
      </div>
    </main>
  )
}
