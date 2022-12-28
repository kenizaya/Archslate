import React from 'react'
import { BsBookmark, BsBookmarkFill, BsShare } from 'react-icons/bs'
import ApplyButton from './ApplyButton'
import Tag from './Tag'
import styles from '../styles/SingleJobCard.module.css'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const SingleJobCard = ({ job }) => {
  return (
    <div className={styles['job-container']}>
      <div className={styles['info-container']}>
        <div className={styles['info']}>
          <div className={styles['job-logo']}>
            <img src={job.image} alt='' width={125} />
          </div>
          <div className={styles['job-info']}>
            <div className={styles['job-tags']}>
              <Tag
                text='Freelance'
                background='#e7ffcd'
                color='black'
                fontWeight='normal'
              />
              <Tag
                text='Long-Term'
                background='#cce6ff'
                color='black'
                fontWeight='normal'
              />
              <Tag
                text='On-Site'
                background='#fccded'
                color='black'
                fontWeight='normal'
              />
            </div>
            <div>
              <h2 className={styles['job-title']}>{job.title}</h2>
              <div className={styles['company-info']}>
                <span className={styles.company}>{job.company}</span>
                <span className={styles.loc}>
                  <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                  <GrLocation size={12} /> {job.location}{' '}
                  <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                  {job.pay}
                </span>
              </div>
            </div>

            <span style={{ fontWeight: '500' }}>Skill Requirenments</span>
            <div className={styles.tags}>
              {job.skills.map((tag) => {
                return <Tag text={tag} key={job.id} />
              })}
            </div>
          </div>
        </div>

        <div className={styles['status-container']}>
          <div className={styles.icons}>
            <BsShare />
            {job.saved ? <BsBookmarkFill /> : <BsBookmark />}
          </div>
          <div className={styles.date}>Posted: {job.postedOn}</div>
          <div className={styles['btn-apply']}>
            <Link to='/job'>
              <ApplyButton text={job.applied ? 'View Job' : 'Apply'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleJobCard
