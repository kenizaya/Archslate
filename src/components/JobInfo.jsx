import React from 'react'
import { BsBookmark, BsShare } from 'react-icons/bs'
import JobLogo from '../assets/JobLogo.png'
import styles from '../styles/JobInfo.module.css'
import ApplyButton from './ApplyButton'
import Tag from './Tag'

const JobInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles['info-container']}>
        <div className={styles['info']}>
          <div className={styles['job-logo']}>
            <img src={JobLogo} alt='' width={100} />
          </div>
          <div className={styles['job-info']}>
            <h2 className={styles['job-title']}>Architectural Designer</h2>
            <p className={styles.company}>Black Mountain Architecture</p>
            <span className={styles.date}>Posted 07/27/2022</span>
          </div>
        </div>

        <div className={styles['status-container']}>
          <div className={styles.icons}>
            <BsShare />
            <BsBookmark />
          </div>
          <div className={styles.status}>Status: Accepting Applications</div>
          <div className={styles['btn-apply']}>
            <ApplyButton text='Apply on Archslate' />
          </div>
        </div>
      </div>
      <div className={styles['job-tags']}>
        <Tag text='Architecture' />
        <Tag text='Freelance' background='#e7ffcd' color='black' />
        <Tag text='Long-Term' background='#cce6ff' color='black' />
      </div>
    </div>
  )
}

export default JobInfo
