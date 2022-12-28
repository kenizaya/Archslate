import React, { useState } from 'react'
import styles from '../styles/Tabs.module.css'
import AppliedJobTab from './AppliedJobTab'
import SearchJobTab from './SearchJobTab'
import SavedJobTab from './SavedJobTab'

const TabContent = ({ tab }) => {
  if (tab === 1) {
    return <SearchJobTab />
  } else if (tab === 2) {
    return <AppliedJobTab />
  } else if (tab === 3) {
    return <SavedJobTab />
  }
  return <div>Please select a tab</div>
}

const TabButton = ({ label, onClick }) => {
  return (
    <button className={styles['btn-tab']} onClick={onClick}>
      {label}
    </button>
  )
}

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <>
      <div className={styles.tabs}>
        <TabButton
          label='Search Jobs'
          onClick={() => {
            setSelectedTab(1)
          }}
        />
        <TabButton label='Applied' onClick={() => setSelectedTab(2)} />
        <TabButton label='Saved Jobs' onClick={() => setSelectedTab(3)} />
      </div>
      <TabContent tab={selectedTab} />
    </>
  )
}

export default Tabs
