import React from 'react'
import styles from '../styles/Card.module.css'

const Card = ({ icon = '', title = '', content = '' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.h3}>{`${title}`}</h3>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  )
}

export default Card
