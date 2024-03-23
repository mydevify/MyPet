import React from 'react'

import Card from './card/card'
import styles from './dashboard.module.css'
import AdoptionRequest from './AdoptionRequest/AdoptionRequest'
import Chart from './chart/chart'
import Rightbar from './rightbar/rightbar'


const Dashboard = () => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.main}>
      <div className={styles.cards}>

      <Card/>
      <Card/>
      <Card/>

        </div>
      <AdoptionRequest/>
      <Chart/>
        
      </div>
      <div className={styles.side}>
        <Rightbar/>
        
      </div>
    </div>
  )
}

export default Dashboard