import React from 'react'
import styles from '../styles/UserInfo.module.css'
import ProfilePic from '../assets/ProfilePic.png'
import { GoMail } from 'react-icons/go'
import Button from './Button'

const UserInfo = () => {
  return (
    <div className={styles['user-wrapper']}>
      <div className={styles['user-card']}>
        <img src={ProfilePic} alt='' width={45} height={45} />
        <div className={styles['user-info']}>
          <h3 className={styles.name}>John Carlos</h3>
          <h4 className={styles.title}>Project Manager</h4>
        </div>
      </div>
      <div className={styles['btn-msg']}>
        <Button icon={<GoMail size={20} />} text='Message' color='white' />
      </div>
    </div>
  )
}

export default UserInfo
