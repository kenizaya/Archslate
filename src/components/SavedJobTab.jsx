import React from 'react'
import styles from '../styles/SearchJobTab.module.css'
import SearchBox from './SearchBox'
import { RiArrowDownSLine } from 'react-icons/ri'
import Dropdown from './Dropdown'
import Button from './Button'
import SingleJobCard from './SingleJobCard'
import data from '../data.js'

const SavedJobTab = () => {
  const savedJobs = data.filter((job) => job.saved === true)
  return (
    <section className={styles.section}>
      <div className={styles['search-sort']}>
        <SearchBox />
        <div className={styles.sort}>
          <span style={{ fontWeight: '500' }}>Sort By: Newest </span>
          <span className={styles['sort-icon']}>
            <RiArrowDownSLine />
          </span>
        </div>
      </div>

      {savedJobs.map((job) => {
        return <SingleJobCard job={job} key={job.id} />
      })}
    </section>
  )
}

export default SavedJobTab
