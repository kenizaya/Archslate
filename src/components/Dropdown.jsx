import React from 'react'
import styles from '../styles/Dropdown.module.css'

const Dropdown = ({ opt1 = '', opt2 = '' }) => {
  return (
    <select name='location' id='dropdown' className={styles.dropdown}>
      <option value='remote' className={styles.option}>
        {opt1}
      </option>
      <option value='on-site' className={styles.option}>
        {opt2}
      </option>
    </select>
  )
}

export default Dropdown
