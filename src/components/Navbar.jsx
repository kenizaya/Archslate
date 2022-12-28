import React from 'react'
import styles from '../styles/Navbar.module.css'
import RightLogo from '../assets/RightLogo.png'
import ArchslateLogo from '../assets/Archslate.png'
import { BsStars, BsGlobe, BsBag } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <div className={styles['logo-container']}>
          <img src={RightLogo} alt='' />
          <img src={ArchslateLogo} alt='' />
        </div>
      </Link>

      <div className={styles['navigation-icons']}>
        <span className={styles.span}>
          <BsStars size={20} />
          Candidates
        </span>
        <span className={styles.span}>
          <BsGlobe size={20} />
          Companies
        </span>
        <span className={styles.span}>
          <BsBag size={20} />
          Jobs
        </span>
        <span className={styles.span}>
          <GoMail size={20} />
          Notifications
        </span>
        <span className={styles.span}>
          <BiUser size={20} />
          User Name
        </span>
      </div>
    </nav>
  )
}

export default Navbar
