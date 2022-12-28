import React from 'react'
import styles from '../styles/ApplyButton.module.css'

const ApplyButton = ({ icon = '', text }) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>{icon}</span>
      <span>{text}</span>
    </button>
  )
}

export default ApplyButton
