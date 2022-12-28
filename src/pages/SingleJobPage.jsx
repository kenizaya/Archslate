import React from 'react'
import JobDescription from '../components/JobDescription'
import JobInfo from '../components/JobInfo'
import InfoCards from '../components/InfoCards'
import Card from '../components/Card'
import UserInfo from '../components/UserInfo'
import { BsArrowLeft } from 'react-icons/bs'
import styles from '../styles/SingleJobPage.module.css'
import { Link } from 'react-router-dom'

const SingleJobPage = () => {
  return (
    <main className={styles.main}>
      <span className={styles['back-btn-container']}>
        <Link className={styles['back-btn']} to='/'>
          <BsArrowLeft />
          <span> Back to jobs</span>
        </Link>
      </span>

      <JobInfo />
      <InfoCards />
      <section className={styles['description-section']}>
        <JobDescription />
        <Card title='Job Poster' content={<UserInfo />} />
      </section>
    </main>
  )
}

export default SingleJobPage
