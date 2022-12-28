import React from 'react'
import Card from './Card'
import { GrLocation } from 'react-icons/gr'
import { CgDollar } from 'react-icons/cg'
import { BsStar } from 'react-icons/bs'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import styles from '../styles/InfoCards.module.css'
import Tag from './Tag'

const InfoCards = () => {
  return (
    <section className={styles.section}>
      <Card
        icon={<AiOutlineThunderbolt />}
        title='Software Skills'
        content={<SoftwareSkills />}
      />
      <Card icon={<BsStar />} title='Experience' content='Associate 3+ years' />
      <Card icon={<CgDollar />} title='Rate' content='$55-$65/hour' />
      <Card
        icon={<GrLocation />}
        title='Location'
        content={<Location loc='Bozeman, MT USA' />}
      />
    </section>
  )
}

const SoftwareSkills = () => {
  return (
    <div className={styles['software-skills']}>
      <Tag icon={<AiOutlineThunderbolt />} text='Rhino' fontSize='0.75rem' />
      <Tag text='Sketchup' fontSize='0.75rem' />
      <Tag text='Vectorworks' fontSize='0.75rem' />
    </div>
  )
}

const Location = ({ loc }) => {
  return (
    <div className={styles.location}>
      <span>{loc}</span>
      <div className={styles.tag}>
        {<Tag text='On-Site' background='#fccded' color='black' />}
      </div>
    </div>
  )
}

export default InfoCards
