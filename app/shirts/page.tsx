'use client'
import styles from 'styles/shirtsPage.module.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import MainNavbar from '../components/mainNavbar';
import { motion } from 'framer-motion';

export default function ShirtsPage() {
  return (
    <div className={styles.shirtsMain}>
      <MainNavbar />
      <div className={styles.shirtsLanding}>
        <motion.div
          className={styles.productCard}
          whileHover={{ scale: 1.1 }}
        >
          <Card bg={'primary'} border={'light'} style={{ width: '100%' }}>
            <Card.Img variant='top' src='/eyes-shirt.jpeg' height={'350rem'} />
            <Card.Header as='h3' style={{fontFamily: 'Be Vietnam Pro, sans-serif'}}>
              eyes
            </Card.Header >
            <Card.Body>
              <Card.Subtitle style={{fontFamily: 'Be Vietnam Pro, sans-serif'}}>
                it&apos;s got eyes on it
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div
          className={styles.productCard}
          whileHover={{ scale: 1.1 }}
        >
          <Card style={{ width: '100%' }}>
            <Card.Img variant='top' src='/ratware-logo.png' height={'350rem'} />
            <Card.Header as='h3' style={{fontFamily: 'Be Vietnam Pro, sans-serif'}}>
              i love you still
            </Card.Header>
            <Card.Body>
              <Card.Subtitle style={{fontFamily: 'Be Vietnam Pro, sans-serif'}}>
                a letter to a younger me
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div
          className={styles.productCard}
          whileHover={{ scale: 1.1 }}
        >
          <Card style={{ width: '100%' }}>
            <Card.Img variant='top' src='/ratware-logo.png' height={'350rem'} />
            <Card.Header as='h3' style={{fontFamily: 'Be Vietnam Pro, sans-serif'}}>
              wally two-face
            </Card.Header>
            <Card.Body>
              <Card.Subtitle style={{fontFamily: 'Be Vietnam Pro, sans-serif'}}>
                he&apos;s just a guy who loves his daughter
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}