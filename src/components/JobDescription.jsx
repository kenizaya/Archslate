import React from 'react'
import styles from '../styles/JobDescription.module.css'
import Button from './Button'
import ApplyButton from './ApplyButton'
import { FiShare2, FiStar } from 'react-icons/fi'

const JobDescription = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>About this role</h3>
      <p>
        Short overview about the job and the way that the candidate would fit
        into the company. Can also include extra instructions for the
        application process if any exists.
      </p>

      <h3 className={styles.h3}>Responsibilities</h3>
      <ul className={styles.ul}>
        <li>specific day to day tasks</li>
        <li>deliverables</li>
        <li>work environment requirenments</li>
        <li>role within the current team</li>
        <li>etc.</li>
      </ul>

      <h3 className={styles.h3}>Skills</h3>
      <ul className={styles.ul}>
        <li>software skills</li>
        <li>technical skills</li>
        <li>soft skills</li>
        <li>other</li>
      </ul>

      <h3 className={styles.h3}>Qualifications</h3>
      <p>Required</p>
      <ul className={styles.ul}>
        <li>education</li>
        <li>licenses and certifications</li>
        <li>experience needed</li>
      </ul>

      <p>Bonus</p>
      <ul className={styles.ul}>
        <li>education</li>
        <li>licenses and certifications</li>
        <li>experience needed</li>
      </ul>

      <h3 className={styles.h3}>Rate</h3>
      <ul className={styles.ul}>
        <li>If applicable</li>
      </ul>

      <h3 className={styles.h3}>Work authorization</h3>
      <ul className={styles.ul}>
        <li>tbd</li>
      </ul>

      <h3 className={styles.h3}>About Company</h3>
      <p>
        Description of company with any uniform info or disclaimers - equal
        hiring opportunity, etc.
      </p>

      <div className={styles['button-container']}>
        <ApplyButton text='Apply on Archslate' />
        <Button icon={<FiStar size={20} />} text='Save' color='white' />
        <Button
          icon={<FiShare2 size={20} />}
          text='Share & Refer'
          color='white'
        />
      </div>
    </div>
  )
}

export default JobDescription
