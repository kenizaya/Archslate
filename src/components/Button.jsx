import React from 'react'
import styles from '../styles/Button.module.css'

const Button = ({
  icon = '',
  text,
  background = '#0f1420',
  border = 'transparent',
  color = 'gray',
}) => {
  return (
    <button
      className={styles.button}
      style={{
        background: background,
        border: border,
        color: color,
      }}
    >
      <span className={styles.icon}>{icon}</span>
      <span>{text}</span>
    </button>
  )
}

export default Button
