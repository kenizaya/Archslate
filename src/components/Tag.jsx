import React from 'react'
import styles from '../styles/Tag.module.css'

const Tag = ({
  icon = '',
  text,
  background = '#0f1420',
  color = 'white',
  fontWeight = 'bold',
  border = 'transparent',
}) => {
  return (
    <button
      className={styles.tag}
      style={{
        background: background,
        color: color,
        fontWeight: fontWeight,
        border: border,
      }}
    >
      <span>
        <span className={styles.icon}>{icon}</span>
        <span>{text}</span>
      </span>
    </button>
  )
}

export default Tag
