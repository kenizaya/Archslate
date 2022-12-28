import React from 'react'
import styles from '../styles/SearchJobTab.module.css'
import SearchBox from './SearchBox'
import { RiArrowDownSLine } from 'react-icons/ri'
import Tag from './Tag'
import Dropdown from './Dropdown'
import Button from './Button'
import SingleJobCard from './SingleJobCard'
import data from '../data.js'

const SearchJobTab = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>What type of jobs interest you?</h3>
      <SearchTabs />
      <div className={styles['search-sort']}>
        <SearchBox />
        <div className={styles.sort}>
          <span style={{ fontWeight: '500' }}>Sort By: Newest </span>
          <span className={styles['sort-icon']}>
            <RiArrowDownSLine />
          </span>
        </div>
      </div>
      <div className={styles.dropdowns}>
        <div className={styles['dropdown-div']}>
          <Dropdown opt1='Remote' opt2='On-Site' />
          <Dropdown opt1='Long-Term' opt2='Short-Term' />
        </div>
        <div>
          <Button
            text='Clear All'
            background='transparent'
            color='gray'
            border='1px solid gray'
          />
        </div>
      </div>
      <div
        style={{ fontWeight: '500', marginTop: '20px', marginBottom: '-20px' }}
      >{`${data.length} results`}</div>
      {data.map((job) => {
        return <SingleJobCard job={job} key={job.id} />
      })}
    </section>
  )
}

const SearchTabs = () => {
  return (
    <div className={styles['search-tabs']}>
      <Tag
        text='Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Commercial Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Computational Design'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Green Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Interior Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Interior Design'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Landscape Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Sustainable Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Urban Design'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Urban Planning'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Vernacular Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Parametic Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
      <Tag
        text='Residential Architecture'
        background='transparent'
        color='black'
        fontWeight='normal'
        border='1px solid black'
      />
    </div>
  )
}

export default SearchJobTab
