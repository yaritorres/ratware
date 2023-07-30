import styles from '../styles/page.module.css'
import MainNavbar from './components/mainNavbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainNavbar />
    </main>
  )
}
