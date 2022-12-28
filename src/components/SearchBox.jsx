import React from 'react'
import { FiSearch } from 'react-icons/fi'
import styles from '../styles/SearchBox.module.css'

const SearchBox = () => {
  return (
    <div className={styles['search-box']}>
      <span className={styles['search-icon']}>
        <FiSearch size={20} color='#6f767d' />
      </span>
      <input
        type='search'
        placeholder='Search'
        className={styles['search-input']}
      />
    </div>
  )
}

export default SearchBox
